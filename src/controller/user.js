const { getUserService, createUserService } = require("../service/user");

async function getUserController(ctx, next) {
  let res = await getUserService();
  ctx.body = res;
}

async function createUserController(ctx, next) {
  let res = await createUserService(ctx);
  ctx.body = res;
}

module.exports = {
  getUserController,
  createUserController,
};
