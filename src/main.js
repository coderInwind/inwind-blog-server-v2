const koa = require("koa");
const router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const app = new koa();
const dotenv = require("dotenv");
dotenv.config();

const { errorHandle } = require("./utils/error-handle");

const userRouter = require("./router/user");
app.use(bodyParser());


app.use(userRouter.routes(), userRouter.allowedMethods());


app.on("error", errorHandle);
app.listen(process.env.APP_PORT, () => {
  console.log(`服务器在${process.env.APP_PORT}启动成功`);
});
