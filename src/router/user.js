const router = require("koa-router");

const userRouter = new router({ prefix: "/api/user" });
const { verifyAuto } = require("../middleware/auth");

const {
  getUserController,
  createUserController,
} = require("../controller/user");

const { createUserVerify } = require("../middleware/user");

userRouter.post("/create", verifyAuto, createUserVerify, createUserController);

userRouter.get("/list", verifyAuto, getUserController);

module.exports = userRouter;
