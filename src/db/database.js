const mysql = require("mysql2");

const { MYSQL_HOST, MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, MYSQL_PORT } =
  process.env;

const connection = mysql.createPool({
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  database: MYSQL_DATABASE,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
});

connection.getConnection((err) => {
  if (err) {
    console.log("数据库连接失败",err);
  } else {
    console.log("数据库连接成功");
  }
});

module.exports = connection.promise();
