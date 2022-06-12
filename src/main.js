const koa = require("koa");
const bodyParser = require("koa-bodyparser");
const app = new koa();
const dotenv = require("dotenv");
const cors = require("koa2-cors");
dotenv.config();

app.use(
  cors({
    origin: "*", // 支持跨域访问的域名
    credentials: true, // 允许跨域带 cookie
  })
);

app.use(require("koa-static")(__dirname + "/public"));
const { errorHandle } = require("./utils/errorHandle");
const userRouter = require("./router/user");
const authRouter = require("./router/auth");
const blogRouter = require("./router/blog");

app.use(bodyParser());

app.use(userRouter.routes(), userRouter.allowedMethods());
app.use(authRouter.routes(), authRouter.allowedMethods());
app.use(blogRouter.routes(), blogRouter.allowedMethods());

app.on("error", errorHandle);
app.listen(process.env.APP_PORT, () => {
  console.log(`服务器在${process.env.APP_PORT}启动成功`);
});
