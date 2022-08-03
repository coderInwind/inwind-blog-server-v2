const db = require("../db/database");

async function bloglistService(ctx) {
  const { page, size, tag } = ctx.request.body;
  const total = await db.execute("SELECT COUNT(*) FROM blog");

  if (!tag) {
    res = await db.execute(
      `SELECT * FROM blog ORDER BY id DESC LIMIT ${(page - 1) * size},${size}`
    );
  } else {
    res = await db.execute(
      `SELECT * FROM blog ORDER BY id WHERE tag = ${tag} DESC LIMIT ${
        (page - 1) * size
      },${size}`
    );
  }
  return { data: res[0], total: total[0][0]["COUNT(*)"] };
}

async function bannerService() {
  const res = await db.execute("SELECT * FROM banner");
  return res[0];
}

async function tagService() {
  const [res] = await db.execute("SELECT tag FROM blog");
  const taglist = new Set();
  for (let i = 0; i < res.length; i++) {
    taglist.add(res[i].tag);
  }
  return [...taglist];
}

async function blogDetailService(ctx) {
  const { id } = ctx.query;
  if (!id) {
    return [{}];
  }
  const res = await db.execute("SELECT * FROM blog WHERE id=?", [id]);
  return res[0][0];
}

async function blogUpdateService(ctx) {
  const { id, title, content, src, tag, overview } = ctx.request.body;
  const res = db.execute(
    `UPDATE blog b set b.title = "${title}",b.content = "${content}",b.src = "${src}",b.tag = "${tag}",b.overview = "${overview}" WHERE id = ${id}`
  );
  return res;
}

module.exports = {
  bloglistService,
  bannerService,
  tagService,
  blogDetailService,
  blogUpdateService,
};
