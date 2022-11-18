const express = require("express");
const router = express.Router();
const crypto = require('crypto');
const db = require("../middleware/database");

// 오늘 식단 저장
router.post("/saveTodayMeal", async (req, res) => {
  const { userId, type, meal } = req.body;
  let failReason = "";
  let successMessage = "";

  if (userId == undefined || type == undefined || meal == undefined) {
    failReason = "Invalid input";
  } else {
    const dateString = new Date().toISOString().substring(0, 10); // UTC
    await db.userMeal.insertOne({
      date: dateString,
      type: type,
      meal: meal
    });
    successMessage = "success";
  }

  res.send({
    status: failReason == "" ? "success" : "fail",
    message: failReason == "" ? successMessage : failReason,
  });
});

module.exports = router;