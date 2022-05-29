const {
  ERROR_USERNAME_OR_PASSWORD_IS_NULL,
  ERROR_USER_IS_EXSIT,
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
