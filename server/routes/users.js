const express = require("express");
const router = express.Router();
const db = require("../middleware/database");
const { createToken, verifyToken } = require("../middleware/auth");
const { encrypt } = require("../middleware/crypt");

const pwRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
const mailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
const nickReg = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;

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
      meal: meal,
    });
    successMessage = "success";
  }

  res.send({
    status: failReason == "" ? "success" : "fail",
    message: failReason == "" ? successMessage : failReason,
  });
});

// 로그인
router.post("/login", async (req, res) => {
  const { userId, password } = req.body;
  let failReason = "";
  let successMessage = "";

  if (!mailRegex.test(userId) || !pwRegex.test(password)) {
    // 형식 검사
    failReason = "Invalid input";
  } else {
    // 입력값을 DB에서 검색
    const userDoc = await db.userData.findOne(
      { userId, password: encrypt(password) },
      { _id: 1 }
    );
    if (userDoc) {
      // 결과가 있으면 토큰 발급
      successMessage = createToken(userDoc._id);
    } else {
      failReason = "Wrong input";
    }
  }

  res.send({
    status: failReason == "" ? "success" : "fail",
    message: failReason == "" ? successMessage : failReason,
  });
});

// 회원가입
router.post("/join", async (req, res) => {
  let failReason = "";
  let successMessage = "";

  const { userId, password, nickname } = req.body;

  if (
    mailRegex.test(userId) &&
    pwRegex.test(password) &&
    nickReg.test(nickname)
  ) {
    // 형식 검사
    // 이미 가입된 아이디가 있는지 검색
    const isExists = await db.userData.countDocuments({
      userId,
      password: encrypt(password),
    });
    if (isExists > 0) {
      // 검색된 아이디가 있으면 실패
      failReason = "Already joined";
    } else {
      // 없으면 DB에 저장, 비밀번호는 암호화해서 저장한다
      await db.userData.insertOne({
        userId: userId,
        password: encrypt(password),
        nickname: nickname,
      });
      successMessage = "success";
    }
  } else {
    // 유효성 검사 실패
    failReason = "Invalid input";
  }

  res.send({
    status: failReason == "" ? "success" : "fail",
    message: failReason == "" ? successMessage : failReason,
  });
});

module.exports = router;
