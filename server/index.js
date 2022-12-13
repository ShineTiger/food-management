require("dotenv").config();
const express = require("express");
const keyChange = require("./dataAlias");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./middleware/database");

const port = process.env.SERVER_PORT;
const app = express();

app.use(cors());
app.use("/api", bodyParser.urlencoded({ extended: true }));
app.use("/api", bodyParser.json());

app.post("/api/getFoodNamesAll", async function (req, res) {
  const result = (await db.foodData.find().toArray()).map((i) => keyChange(i));
  const filter = result.map((i) => ({id, name, kiloCalories}));
  res.send({
    status: "success",
    message: filter,
  });
});

app.post("/api/getFoodsAll", async function (req, res) {
  const result = (await db.foodData.find().toArray()).map((i) => keyChange(i));
  res.send({
    status: "success",
    message: result,
  });
});

//test용 api - 칼로리계산
app.post("/api/foodCalorie", async function (req, res) {
  res.send({
    status: "success",
    message: [400, 300, 200],
  });
});

app.post("/api/test", async function (req, res) {
  const success = Math.random() < 0.5;
  res.send({
    status: success ? "success" : "fail",
    message: success ? "" : "Unknown Error",
  });
});

app.post("/api/joinSuccess", async function (req, res) {
  const success = 1;
  res.send({
    status: success ? "success" : "fail",
    message: success ? "" : "Unknown Error",
  });
});

//토큰유무확인을 위해 message를 잠시 object 형식으로 변경함
app.post("/api/testSuccess", async function (req, res) {
  res.send({
    status: "success",
    message: '{"worked": "successfully"}',
  });
});

app.post("/api/testFail", async function (req, res) {
  res.send({
    status: "fail",
    message: "something goes wrong",
  });
});

app.use("/api", require("./routes/users"));
app.listen(port, () => {
  console.log(`${port} hello server`);
});
