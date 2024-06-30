const jwt = require("jsonwebtoken");
const UserModel = require("../models/Usermodel");

const ensureAuthentication = async (req, res, next) => {
  const storedAccessToken = req.cookies?.M_At;
  const storedRefreshToken = req.cookies?.M_Rt;

  if (!storedAccessToken && !storedRefreshToken) {
    return res.json({
      message: "Session expired, Login again.",
      status: 401,
      authenticated: false,
    });
  }

  let decodedToken;
  if (storedRefreshToken) {
    decodedToken = jwt.decode(storedRefreshToken);
  }

  try {
    if (
      !storedAccessToken ||
      (decodedToken && Date.now() >= decodedToken.exp * 1000)
    ) {
      if (storedRefreshToken) {
        const user = await UserModel.findById(decodedToken.id);

        if (user && user.refreshToken === storedRefreshToken) {
          const accessToken = jwt.sign(
            { username: user.username, id: user._id },
            process.env.JWT_ACCESS_TOKEN_SECRET,
            { expiresIn: "3h" }
          );

          const refreshToken = jwt.sign(
            { username: user.username, id: user._id },
            process.env.JWT_REFRESH_TOKEN_SECRET,
            { expiresIn: "3d" }
          );

          console.log("Tokens refreshed successfully");

          res.cookie("M_At", accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: 3 * 60 * 60 * 1000,
          });

          res.cookie("M_Rt", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: 3 * 24 * 60 * 60 * 1000,
          });

          await UserModel.findByIdAndUpdate(decodedToken.id, {
            $set: { refreshToken: refreshToken },
          });

          req.cookies.M_At = accessToken;
          req.cookies.M_Rt = refreshToken;
        } else {
          return res.json({
            message: "Unauthorized: Invalid refresh token",
            status: 401,
          });
        }
      } else {
        return res.json({
          message: "Unauthorized: No refresh token provided",
          status: 401,
        });
      }
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error!");
  }
};

module.exports = {
  ensureAuthentication,
};
