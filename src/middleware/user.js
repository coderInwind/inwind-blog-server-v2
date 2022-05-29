const { getUserByNameService } = require("../service/user");
const { ERROR_USERNAME_OR_PASSWORD_IS_NULL, ERROR_USER_IS_EXSIT } = process.env;

async function createUserVerify(ctx, next) {
  const { username, password } = ctx.request.body;
  // 是否为空
  if (!username || !password) {
    return ctx.app.emit("error", ERROR_USERNAME_OR_PASSWORD_IS_NULL, ctx);
  }

  //是否存在
  const ifUser = await getUserByNameService(username);
  if (ifUser.length) {
    return ctx.app.emit("error", ERROR_USER_IS_EXSIT, ctx);
  }

  await next();
}

const crypto = require("crypto");
// 加密
async function handlePassword(ctx, next) {
  let { password } = await ctx.request.body;
  const md5 = crypto.createHash("md5");
  ctx.request.body.password = md5.update(password).digest("hex");
  await next();
}

module.exports = {
  createUserVerify,
  handlePassword,
};
