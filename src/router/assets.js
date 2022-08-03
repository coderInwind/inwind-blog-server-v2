const router = require("koa-router");
const { imgListController } = require("../controller/assets");

const assetsRouter = new router({ prefix: "/api/assets" });

assetsRouter.get("/imglist", imgListController);

module.exports = assetsRouter