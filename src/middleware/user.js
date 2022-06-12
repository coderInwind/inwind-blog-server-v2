const { getUserByNameService } = require("../service/user");
const { ERROR_USERNAME_OR_PASSWORD_IS_NULL, ERROR_USER_IS_EXSIT } = process.env;
const { encrypt } = require("../utils/encrypt");

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

  //加密
  ctx.request.body.password = encrypt(password);

  await next();
}

module.exports = {
  createUserVerify,
};
