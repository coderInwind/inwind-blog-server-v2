const router = require("koa-router");

const userRouter = new router({ prefix: "/api/user" });

const {
  getUserController,
  createUserController,
} = require("../controller/user");

const { createUserVerify, handlePassword } = require("../middleware/user");

userRouter.post(
  "/create",
  createUserVerify,
  handlePassword,
  createUserController
);
userRouter.get("/list", getUserController);

module.exports = userRouter;
