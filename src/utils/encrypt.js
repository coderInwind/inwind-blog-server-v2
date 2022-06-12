const crypto = require("crypto");
// 加密
function encrypt(password) {
  const md5 = crypto.createHash("md5");
  return md5.update(password).digest("hex");
}

module.exports = {
  encrypt,
};
