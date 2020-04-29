const express = require("express");
const router = express.Router();
//require router
const province = require(__dirname + "/indoProvince");
const countries = require("./countries");
//require data source
const data = require(__dirname + "/../data/world.json");

router.use("/provinsi", province);
router.use("/countries", countries);

router.get("/", (req, res) => {
  res.json(data);
});

module.exports = router;
