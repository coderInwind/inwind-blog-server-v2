const {
  bloglistService,
  bannerService,
  tagService,
  blogDetailService,
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

async function blogsDetailController(ctx,next){
  const res = await blogDetailService(ctx)
  ctx.body = res
}

module.exports = {
  blogController,
  bannerController,
  tagController,
  blogsDetailController
};
