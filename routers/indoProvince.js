const express = require("express");
const router = express.Router();
const data = require(__dirname + "/../data/data.json");

//find all
router.get("/", (req, res) => {
  res.json(data);
});

//find per province
router.get("/:daerah", (req, res) => {
  const isi = data.data;
  let hasilFilter = isi.find(
    (x) =>
      x.attributes.Provinsi.toLowerCase() === req.params.daerah.toLowerCase()
  );
  response = {
    data: hasilFilter.attributes,
    updatedAt: data.updattedAt,
  };
  res.json(response);
});

module.exports = router;
