const {
  ERROR_USERNAME_OR_PASSWORD_IS_NULL,
  ERROR_USER_IS_EXSIT,
  ERROR_USER_IS_NOT_EXSIT,
  ERROR_PASSWORD_IS_ERROR,
  ERROR_UNAUTHORIZED
} = process.env;

function errorHandle(error, ctx) {
  console.log(error);
  let status;
  let message;
  switch (error) {
    case ERROR_USERNAME_OR_PASSWORD_IS_NULL:
      status = 400;
      message = "用户名或密码为空";
      break;
    case ERROR_USER_IS_EXSIT:
      status = 409;
      message = "该用户已存在";
      break;
    case ERROR_USER_IS_NOT_EXSIT:
      status = 400;
      message = "用户不存在";
      break;
    case ERROR_PASSWORD_IS_ERROR:
      status = 400;
      message = "密码错误";
      break;
    case ERROR_UNAUTHORIZED:
      status = 400;
      message = "无效的Token";
      break;
    default:
      status = 404;
      message = "NOT FOUND";
  }
  ctx.status = status;
  ctx.body = message;
}
module.exports = {
  errorHandle,
};
