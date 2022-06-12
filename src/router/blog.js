const router = require("koa-router");

const {
  blogController,
  bannerController,
  tagController,
  blogsDetailController,
} = require("../controller/blog");

const blogRouter = new router({ prefix: "/api/blog" });

blogRouter.post("/list", blogController);

blogRouter.get("/banner", bannerController);

blogRouter.get("/tag", tagController);

blogRouter.get("/detail", blogsDetailController);

module.exports = blogRouter;
