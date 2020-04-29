const express = require("express");
const router = express.Router();

const datas = require(__dirname + "/../data/countries");

router.get("/", (req, res) => {
  res.json(datas);
});

router.get("/:country", (req, res) => {
  data = datas.data.find(
    (x) => x.country.toLowerCase() === req.params.country.toLowerCase()
  );
  response = {
    data,
    updatedAt: datas.updatedAt,
  };
  res.json(response);
});
module.exports = router;
