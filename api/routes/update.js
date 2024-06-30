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
          res.status(200).send(finalList.reverse());
        }
      } else {
        res.send(allEgg.reverse());
      }
    }
  } catch (err) {
    res.status(501).json({ message: "Internal server error" });
  }
});

router.post("/update-all", ensureAuthentication, async (req, res) => {
  const { large, medium, small, bullet } = req.body;

  try {
    await TypeModel.findOneAndUpdate(
      { verity: "Large" },
      {
        $set: { price: large },
      }
    );
    await TypeModel.findOneAndUpdate(
      { verity: "Medium" },
      {
        $set: { price: medium },
      }
    );
    await TypeModel.findOneAndUpdate(
      { verity: "Medium Small" },
      {
        $set: { price: small },
      }
    );
    await TypeModel.findOneAndUpdate(
      { verity: "Bullet" },
      {
        $set: { price: bullet },
      }
    );
    res.status(200).json({ message: "Updated successfully...", status: 200 });
  } catch (err) {
    res.status(501).json({ message: "Internal server error" });
  }
});


router.get("/egg-data", async (req, res) => {
  const allEgg = await EggModel.find();
  res.send(allEgg.reverse());
});


router.get("/all-egg-data", async (req, res) => {
  const allEgg = await TypeModel.find();
  res.send(allEgg);
});

module.exports = router;
