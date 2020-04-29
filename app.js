const express = require("express");
const DataSource = require(__dirname + "/data/dataSource");
const api = require(__dirname + "/routers/api");
const cors = require("cors");
const port = process.env.PORT || 3000;

const dataSource = new DataSource();

//update data every 24 hour
setInterval(dataSource.updateDataProvince, 1000 * 60 * 60 * 24);
setInterval(dataSource.updateDataWorld, 1000 * 60 * 60 * 24);
setInterval(dataSource.updateDataCountries, 1000 * 60 * 60 * 24);

const app = express();
app.use(cors());

// use the api route
app.use("/api", api);

app.listen(port, () => console.log("server is start on 3000"));
