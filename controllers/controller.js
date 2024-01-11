// home page
const fs = require("fs");

exports.home = async (req, res) => {
  await res.render("index", {
    user: process.env.USERNAME,
    pass: process.env.PASSWORD,
  });
  console.log("Hello home");
};
// PageColor
exports.PageColor = async (req, res) => {
  await fs.writeFile(
    "./public/avatar/page/backgroundColor.txt",
    req.body.back_color,
    function (err) {
      if (err) throw res.render("Dashboard");
      res.render("Dashboard");
      console.log(`Add BackgroundColor เรียบร้อย`);
    },
  );
  await fs.writeFile(
    "./public/avatar/page/fontColor.txt",
    req.body.font_color,
    function (err) {
      if (err) throw res.render("Dashboard");
      res.render("Dashboard");
      console.log(`Add font_color เรียบร้อย`);
    },
  );
};
