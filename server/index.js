require("dotenv").config();
const express = require('express');
const { MongoClient } = require("mongodb");
const { keyChange } = require('./dataAlias');
const cors = require("cors");

const port = process.env.SERVER_PORT;
const app = express();

const uri = process.env.DB_URI;
const client = new MongoClient(uri);
const db = client.db(process.env.DB_NAME);
const foodData = db.collection(process.env.DB_COLL_FOOD);

app.use(cors());

app.post('/api/test', async function (req, res) {
    const success = Math.random() < 0.5;
    res.send({
        status: success ? "success" : "fail",
        message: success ? "" : "Unknown Error",
    });
});

app.post('/api/testSuccess', async function (req, res) {
    res.send({
        status: "success",
        message: "worked successfully"
    });
});

app.post('/api/testFail', async function (req, res) {
    res.send({
        status: "fail",
        message: "something goes wrong"
    });
});

app.listen(port, () => {
                    console.log(`${port} hello server`);
});
