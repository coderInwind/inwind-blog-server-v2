const {
  bloglistService,
  bannerService,
  tagService,
  blogDetailService,
  blogUpdateService,
} = require("../service/blog");

async function blogController(ctx, next) {
  const res = await bloglistService(ctx);
  ctx.body = res;
}

async function bannerController(ctx, next) {
  const res = await bannerService();
  ctx.body = res;
}

async function tagController(ctx, next) {
  const res = await tagService();
  ctx.body = res;
}

async function blogDetailController(ctx, next) {
  const res = await blogDetailService(ctx);
  ctx.body = { data: res };
}

async function blogUpdateController(ctx, next) {
  const res = await blogUpdateService(ctx);

  if (res[0].affectedRows === 1) {
    ctx.body = { data: "修改成功" };
  }
}

module.exports = {
  blogController,
  bannerController,
  tagController,
  blogDetailController,
  blogUpdateController,
};
