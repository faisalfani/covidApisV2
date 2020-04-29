const axios = require("axios");
const fs = require("fs");

class DataSource {
  updateDataProvince() {
    axios.get("https://api.kawalcorona.com/indonesia/provinsi/").then((res) => {
      const date = new Date();
      const currentDate = date.toLocaleString("id-ID");
      const data = res.data;
      const datas = {
        data: data,
        updattedAt: currentDate,
      };
      const json = JSON.stringify(datas);
      fs.writeFile(__dirname + "/data.json", json, (err) =>
        err ? console.log(err) : ""
      );

      console.log("data was updated");
    });
  }
  updateDataWorld() {
    axios.get("https://coronavirus-19-api.herokuapp.com/all").then((res) => {
      const date = new Date();
      const current = date.toLocaleString("id-ID");
      const datas = {
        data: res.data,
        updatedAt: current,
      };
      json = JSON.stringify(datas);
      fs.writeFile(__dirname + "/world.json", json, (err) => {
        if (err) {
          console.err(err);
        }
      });
      console.log("data was updated");
    });
  }

  async updateDataCountries() {
    try {
      const date = new Date();
      const current = date.toLocaleDateString("id-ID");
      const data = await axios
        .get("https://coronavirus-19-api.herokuapp.com/countries")
        .then((res) => {
          return JSON.stringify({ data: res.data, updatedAt: current });
        });
      fs.writeFile(__dirname + "/data/countries.json", data, (err) =>
        err ? console.log(err) : ""
      );
      console.log("data was updated");
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = DataSource;
