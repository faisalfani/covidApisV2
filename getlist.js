const axios = require("axios");
const fs = require("fs");

axios.get("https://covid19.mathdro.id/api/countries").then((res) => {
  data = res.data;
  fs.writeFile(__dirname + "/data/list.json", JSON.stringify(data), (err) => {
    if (err) {
      console.log(err);
    }
  });
});
