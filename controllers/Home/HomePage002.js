// Homepage 02 promotion 01
exports.H002Promo01 = async (req, res) => {
  await require("fs").writeFile(
    "./public/avatar/Home/H002/promo01/promo01.txt",
    req.body.promo01Head,
    function () {},
  );
  await require("fs").writeFile(
    "./public/avatar/Home/H002/promo01/promo01Img.txt",
    req.file.filename,
    function () {},
  );
  await res.redirect("/dashboard");
  console.log("HomeEdit Two ");
};

// Homepage 02 promotion 02
exports.H002Promo02 = async (req, res) => {
  await require("fs").writeFile(
    "./public/avatar/Home/H002/promo02/promo02.txt",
    req.body.promo02,
    function () {},
  );
  await require("fs").writeFile(
    "./public/avatar/Home/H002/promo02/promo02Img.txt",
    req.file.filename,
    function () {},
  );
  await res.redirect("/dashboard");
  console.log("HomeEdit Two ");
};

// Homepage 02 promotion 03
exports.H002Promo03 = async (req, res) => {
  await require("fs").writeFile(
    "./public/avatar/Home/H002/promo03/promo03.txt",
    req.body.promo03,
    function () {},
  );
  await require("fs").writeFile(
    "./public/avatar/Home/H002/promo03/promo03Img.txt",
    req.file.filename,
    function () {},
  );
  await res.redirect("/dashboard");
  console.log("HomeEdit 03 ");
};

// Homepage 02 promotion 04
exports.H002Promo04 = async (req, res) => {
  await require("fs").writeFile(
    "./public/avatar/Home/H002/promo04/promo04.txt",
    req.body.promo04,
    function () {},
  );
  await require("fs").writeFile(
    "./public/avatar/Home/H002/promo04/promo04Img.txt",
    req.file.filename,
    function () {},
  );
  await res.redirect("/dashboard");
  console.log("HomeEdit 04 ");
};

// Homepage 02 promotion Details---------------------------
exports.H002PromoDetails = async (req, res) => {
  await require("fs").writeFile(
    "./public/avatar/Home/H002/promoDetail/promoDetailsHead.txt",
    req.body.promoDetailsHead,
    function () {},
  );
  await require("fs").writeFile(
    "./public/avatar/Home/H002/promoDetail/promoDetailsTextarea.txt",
    req.body.promoDetailsTextarea,
    function () {},
  );
  await require("fs").writeFile(
    "./public/avatar/Home/H002/promoDetail/promoDetailsImg.txt",
    req.file.filename,
    function () {},
  );
  await res.redirect("/dashboard");
  console.log("HomeEdit PromoDetails OK ");
};
