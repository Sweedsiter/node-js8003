const fs = require("fs");
exports.H002 = async (req, res) => {
  await res.redirect("/dashboard");

  // cread Promotion IMG and text

  await fs.writeFile(
    "./public/avatar/Home/H002-promo02.txt",
    req.body.promo02,
    function (err) {},
  );
  await fs.writeFile(
    "./public/avatar/Home/H002-promo03.txt",
    req.body.promo03,
    function (err) {},
  );
  await fs.writeFile(
    "./public/avatar/Home/H002-promo04.txt",
    req.body.promo04,
    function (err) {},
  );

  // cread Promo
  await fs.writeFile(
    "./public/avatar/Home/H002-promoHead.txt",
    req.body.promoHead,
    function (err) {},
  );
  await fs.writeFile(
    "./public/avatar/Home/H002-promoDetail.txt",
    req.body.promoDetail,
    function (err) {},
  );

  res.render("Dashboard");
  console.log("H002 Edit Ok", req.body, req.file);
};

// Home update 002-01
exports.H002_01 = async (req, res) => {
  await fs.writeFile(
    "./public/avatar/Home/H002-promo01.txt",
    req.body.promo01,
    function (err) {},
  );
  // img
  await fs.writeFile(
    "./public/avatar/Home/uploadH002Promo01.txt",
    req.file.filename,
    function (err) {},
  );
  res.render("Dashboard");
  console.log("H002-01 Edit Ok", req.body, req.file);
};
