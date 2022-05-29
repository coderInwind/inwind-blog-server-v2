const db = require("../db/database");

async function getUserService() {
  const data = await db.execute("SELECT * FROM users");
  let [res] = data;
  return res;
}

async function getUserByNameService(username) {
  const data = await db.execute("SELECT * FROM users WHERE username = ?", [
    username,
  ]);
  let [res] = data;
  return res;
}

async function createUserService(ctx) {
  const { username, password } = ctx.request.body;
  const data = await db.execute(
    "INSERT INTO users (username,password) VALUES (?,?)",
    [username, password]
  );
  return "创建成功"
}

module.exports = {
  getUserService,
  createUserService,
  getUserByNameService
};
