const crypto = require('crypto');

const alg = process.env.ENCRYPT_ALG;
const key = Buffer.from(process.env.ENCRYPT_KEY, 'hex');
const iv = process.env.ENCRYPT_IV;

// 암호화
function encrypt(object) {
    try {
        const cipher = crypto.createCipheriv(alg, key, iv);
        return cipher.update(JSON.stringify(object), 'utf8', 'base64') + cipher.final('base64');
    } catch (error) {
        return undefined;
    }
}
// 복호화
function decrypt(string) {
    try {
        const deciper = crypto.createDecipheriv(alg, key, iv);
        return JSON.parse(deciper.update(string, 'base64', 'utf8') + deciper.final('utf8'));
    } catch (error) {
        return undefined;
    }
}

module.exports = { encrypt, decrypt };