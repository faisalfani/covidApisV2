const express = require("express");
const router = express.Router();
//require router
const province = require(__dirname + "/indoProvince");
const countries = require("./countries");
//require data source
const data = require(__dirname + "/../data/world");
const list = require(__dirname + "/../data/list");

router.use("/provinsi", province);
router.use("/countries", countries);

router.get("/", (req, res) => {
  res.json(data);
});
router.get("/list", (req, res) => {
  res.json(list);
});

module.exports = router;
