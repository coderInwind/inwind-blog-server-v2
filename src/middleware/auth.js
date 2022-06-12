const { getUserByNameService } = require("../service/user");
const {
  ERROR_USERNAME_OR_PASSWORD_IS_NULL,
  ERROR_USER_IS_NOT_EXSIT,
  ERROR_PASSWORD_IS_ERROR,
  ERROR_UNAUTHORIZED,
} = process.env;

const { encrypt } = require("../utils/encrypt");
const jwt = require("jsonwebtoken");
const { publicKey } = require("../keys/index");

async function loginUserVerify(ctx, next) {
  const { username, password } = ctx.request.body;
  // 是否为空
  if (!username || !password) {
    return ctx.app.emit("error", ERROR_USERNAME_OR_PASSWORD_IS_NULL, ctx);
  }

  //是否不存在
  const user = await getUserByNameService(username);
  if (!user.length) {
    return ctx.app.emit("error", ERROR_USER_IS_NOT_EXSIT, ctx);
  }

  //是否正确
  const encryptedPassword = encrypt(password);
  if (encryptedPassword === password) {
    return ctx.app.emit("error", ERROR_PASSWORD_IS_ERROR, ctx);
  }

  await next();
}

  //验证token
async function verifyAuto(ctx, next) {
  const token = ctx.headers.authorization.replace("Bearer ", "");

  try {
    const res = jwt.verify(token, publicKey, {
      algorithms: ["RS256"],
    });
    ctx.user = res;
    await next();
  } catch {
    ctx.app.emit("error", ERROR_UNAUTHORIZED, ctx);
  }
}

module.exports = {
  loginUserVerify,
  verifyAuto,
};
