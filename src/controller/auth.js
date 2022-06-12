const jwt = require("jsonwebtoken");
const { privateKey } = require("../keys/index");

async function loginUserController(ctx, next) {
  const { username, password } = ctx.request.body;

  const token = jwt.sign({ username, password }, privateKey, {
    expiresIn: 60 * 60 * 24,
    algorithm: "RS256",
  });
  ctx.body = {
    username,
    password,
    token,
  };
}

module.exports = {
  loginUserController,
};
