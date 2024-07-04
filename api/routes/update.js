const { ensureAuthentication } = require("../middlewares/ensureAccessToken");
const Eggmodel = require("../models/Eggmodel");
const EggModel = require("../models/Eggmodel");
const TypeModel = require("../models/Typeegg");

const router = require("express").Router();

router.post("/update-daily", ensureAuthentication, async (req, res) => {
  const { date, price } = req.body;
  if (!date || !price) return res.send("Two fields required");
  try {
    const updatedData = await EggModel.create({
      date,
      price,
    });

    if (updatedData) {
      const allEgg = await EggModel.find();
      if (allEgg.length > 6) {
        const deletedData = await Eggmodel.findByIdAndDelete(allEgg[0]._id);
        if (deletedData) {
          const finalList = await Eggmodel.find();
          res.status(200).json({
            data: finalList.reverse(),
            message: "Updated Successfully",
          });
        }
      } else {
        res
          .status(200)
          .json({ data: allEgg.reverse(), message: "Updated Successfully" });
      }
    }
  } catch (err) {
    res.status(501).json({ message: "Internal server error" });
  }
});

router.post("/update-all/:type", ensureAuthentication, async (req, res) => {
  const { large, medium, small, bullet } = req.body;

  try {
    await TypeModel.findOneAndUpdate(
      { verity: "Large", color: req.params.type },
      {
        $set: { price: large },
      }
    );
    await TypeModel.findOneAndUpdate(
      { verity: "Medium", color: req.params.type },
      {
        $set: { price: medium },
      }
    );
    await TypeModel.findOneAndUpdate(
      { verity: "Medium Small", color: req.params.type },
      {
        $set: { price: small },
      }
    );
    await TypeModel.findOneAndUpdate(
      { verity: "Bullet", color: req.params.type },
      {
        $set: { price: bullet },
      }
    );
    res.status(200).json({ message: "Updated successfully...", status: 200 });
  } catch (err) {
    res.status(501).json({ message: "Internal server error" });
  }
});

router.patch("/update-price", ensureAuthentication, async (req, res) => {
  const { id, newPrice } = req.body;
  try {
    if (id) {
      const updatedData = await EggModel.findOneAndUpdate(
        { _id: id },
        {
          $set: { price: newPrice },
        }
      );
      if (updatedData) {
        const eggData = await Eggmodel.find();
        res.status(200).json({
          message: "Price changed successfully",
          data: eggData.reverse(),
        });
      } else
        res.json({
          message: "Failed! Try again",
          status: 501,
          data: eggData.reverse(),
        });
    }
  } catch (err) {
    res.json({ message: "Internal server error, try again", status: 501 });
  }
});

router.put('/delete-price', ensureAuthentication, async ( req, res )=> {
  const {id} = req.body;

  try {
    if (id) {
      const updatedData = await EggModel.findByIdAndDelete(
        { _id: id }
      );
      if (updatedData) {
        const eggData = await Eggmodel.find();
        res.status(200).json({
          message: "Deleted successfully",
          data: eggData.reverse(),
        });
      } else
        res.json({
          message: "Failed! Try again",
          status: 501,
          data: eggData.reverse(),
        });
    }
  } catch (err) {
    res.json({ message: "Internal server error, try again", status: 501 });
  }
})

router.get("/egg-data", async (req, res) => {
  const allEgg = await EggModel.find();
  res.send(allEgg.reverse());
});

router.get("/all-egg-data", async (req, res) => {
  const allEgg = await TypeModel.find();
  res.send(allEgg);
});

module.exports = router;
