const { encrypt, decrypt } = require("../middleware/crypt");

// 토큰 발급
function createToken(userId) {
    let due = new Date();
    // 유효기간 설정;
    due.setMinutes(due.getMinutes() + 30);
    due = due.toString();
    return encrypt({ userId, due });
}
// 토큰 검증
function verifyToken(tokenString) {
    const token = decrypt(tokenString);
    let verfied = false;
    let message = '';
    if (token) {
        // 유효기간 검사
        if (Date.now() > new Date(token.due).getTime()) {
            message = 'Expired Token';
        } else {
            verfied = true;
            message = 'Success';
        }
    } else {
        message = 'Invalid Token';
    }
    return { verfied, message };
}
module.exports = { createToken, verifyToken };
