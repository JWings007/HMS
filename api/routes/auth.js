const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../models/Usermodel");
const { ensureAuthentication } = require("../middlewares/ensureAccessToken");

router.post("/register", async (req, res) => {
  const { name, username, password, adminKey } = req.body;

  if (!(username && password)) {
    return res.status(400).json({ error: "All fields are required.." });
  }

  if (adminKey !== process.env.ADMIN_KEY)
    return res.json({
      message: "Admin key you entered is incorrect",
      status: 401,
      exists: false,
      admin: false,
    });

  try {
    const existingUser = await UserModel.findOne({ username });

    if (!existingUser) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await UserModel.create({
        name,
        username,
        password: hashedPassword,
      });

      newUser.password = null;
      res.status(200).json({
        exist: false,
        user: newUser,
        message: "User created successfully. Login using credentials",
        admin: true,
      });
    } else {
      res.json({
        exist: true,
        message: "Account already exists with this username",
        status: 400,
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!(username && password)) {
    res.status(400).json({ error: "All fields are required.." });
    return;
  }

  try {
    const existingUser = await UserModel.findOne({ username });

    if (existingUser) {
      const passCheck = await bcrypt.compare(password, existingUser.password);

      if (passCheck) {
        const { password, jwtRefreshToken, ...others } = existingUser._doc;

        const newAccessToken = jwt.sign(
          { username: existingUser.username, id: existingUser._id },
          process.env.JWT_ACCESS_TOKEN_SECRET,
          { expiresIn: "3h" }
        );
        const newRefreshToken = jwt.sign(
          { username: existingUser.username, id: existingUser._id },
          process.env.JWT_REFRESH_TOKEN_SECRET,
          { expiresIn: "3d" }
        );

        res.cookie("M_At", newAccessToken, {
          httpOnly: true,
          secure: true,
          sameSite: 'None',
          maxAge: 3 * 60 * 60 * 1000,
        });

        res.cookie("M_Rt", newRefreshToken, {
          httpOnly: true,
          secure: true,
          sameSite: 'None',
          maxAge: 10 * 24 * 60 * 60 * 1000,
        });

        const updatedUser = await UserModel.findByIdAndUpdate(others._id, {
          $set: { refreshToken: newRefreshToken },
        });

        if (updatedUser) {
          res
            .status(200)
            .json({ username: true, password: true, user: others });
        } else {
          res.status(200).json({
            username: true,
            password: true,
            user: others,
            message: "Falied in adding refresh token to database",
          });
        }
      } else {
        res.json({
          username: true,
          password: false,
          message: "Input password is incorrect!",
        });
      }
    } else {
      res.json({ username: false, password: false, message: "No user found!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/logout", async (req, res) => {
  try {
    const user = await UserModel.findOneAndUpdate(
      { username: req.body.username },
      {
        $set: { refreshToken: null },
      }
    );

    if (user) {
      res.clearCookie("M_At");
      res.clearCookie("M_Rt");
      res
        .status(200)
        .json({ message: "Logout success", success: true, status: 200 });
    } else
      res.status(501).json({
        message: "Internal server error please try again!",
        success: false,
        status: 501,
      });
  } catch (err) {
    res.status(500).send("Internal server error");
  }
});

router.get("/authcheck", ensureAuthentication, (req, res) => {
  const accessToken = req.cookies.M_At;
  const refreshToken = req.cookies.M_Rt;

  if (refreshToken && accessToken)
    res.status(200).json({ message: "Authenticated", authenticated: true });
  else
    res.json({ message: "Session expired, login again", authenticated: false });
});

module.exports = router;
