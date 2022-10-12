require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");
const { keyChange } = require("./dataAlias");
const cors = require("cors");

const port = process.env.SERVER_PORT;
const app = express();

const uri = process.env.DB_URI;
const client = new MongoClient(uri);
const db = client.db(process.env.DB_NAME);
const foodData = db.collection(process.env.DB_COLL_FOOD);

app.use(cors());

app.post("/api/getFoodNamesAll", async function (req, res) {
  const result = (await foodData.find().toArray()).map((i) => i.식품명);
  console.log(result);
  res.send(result);
});

//test용 api
app.get("/api/foodName", async function (req, res) {
  res.send({
    status: "success",
    message: [
      { id: 1, name: "바나나" },
      { id: 2, name: "바닐라라떼" },
      { id: 3, name: "바나나우유" },
      { id: 4, name: "보리밥" },
      { id: 5, name: "자라탕" },
      { id: 6, name: "장조림" },
      { id: 7, name: "밤밥" },
      { id: 8, name: "반역" },
      { id: 9, name: "부라보" },
      { id: 10, name: "보라색보라돌이는포도를" },
      { id: 11, name: "바나나색텔레토비는나나를" },
    ],
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

app.listen(port, () => {
  console.log(`${port} hello server`);
});
