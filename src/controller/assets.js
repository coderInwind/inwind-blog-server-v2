const { imglistService } = require("../service/assets");

const imgListController = async (ctx, next) => {
  const res = await imglistService(ctx);
  ctx.body = { data: res };
};

module.exports = {
  imgListController,
};
