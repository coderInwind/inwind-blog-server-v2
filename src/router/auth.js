const router = require("koa-router");
const authRouter = new router({ prefix: "/api" });
const { loginUserController } = require("../controller/auth");
const { loginUserVerify } = require("../middleware/auth");

authRouter.post("/login", loginUserVerify, loginUserController);

module.exports = authRouter;
