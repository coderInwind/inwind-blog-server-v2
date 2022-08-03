const db = require("../db/database");

const imglistService = async (ctx) => {
  const list = await db.execute("SELECT * FROM photos");
  console.log(list);
  return list[0]
};

module.exports = {
  imglistService,
};
