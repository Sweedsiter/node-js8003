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

// Homepage 02 promotionContaceHead01---------------------------
exports.H002PromoContactHead01 = async (req, res) => {
  await require("fs").writeFile(
    "./public/avatar/Home/H002/promoContactHead01/promoContactHead01Name.txt",
    req.body.promoContactHead01Name,
    function () {},
  );
  await require("fs").writeFile(
    "./public/avatar/Home/H002/promoContactHead01/promoContactHead01leval.txt",
    req.body.promoContactHead01leval,
    function () {},
  );
  await require("fs").writeFile(
    "./public/avatar/Home/H002/promoContactHead01/promoContactHead01Img.txt",
    req.file.filename,
    function () {},
  );
  await res.redirect("/dashboard");
  console.log("HomeEdit PromoContactHead01 OK ");
}; //H002PromoContactHead01

exports.H002PromoContactHead02 = async (req, res) => {
  await require("fs").writeFile(
    "./public/avatar/Home/H002/promoContactHead02/promoContactHead02Name.txt",
    req.body.promoContactHead02Name,
    function () {},
  );
  await require("fs").writeFile(
    "./public/avatar/Home/H002/promoContactHead02/promoContactHead02leval.txt",
    req.body.promoContactHead02leval,
    function () {},
  );
  await require("fs").writeFile(
    "./public/avatar/Home/H002/promoContactHead02/promoContactHead02Img.txt",
    req.file.filename,
    function () {},
  );
  await res.redirect("/dashboard");
  console.log("HomeEdit PromoContactHead02 OK ");
}; //H002PromoContactHead02

exports.H002PromoContactHead03 = async (req, res) => {
  await require("fs").writeFile(
    "./public/avatar/Home/H002/promoContactHead03/promoContactHead03Name.txt",
    req.body.promoContactHead03Name,
    function () {},
  );
  await require("fs").writeFile(
    "./public/avatar/Home/H002/promoContactHead03/promoContactHead03leval.txt",
    req.body.promoContactHead03leval,
    function () {},
  );
  await require("fs").writeFile(
    "./public/avatar/Home/H002/promoContactHead03/promoContactHead03Img.txt",
    req.file.filename,
    function () {},
  );
  await res.redirect("/dashboard");
  console.log("HomeEdit PromoContactHead03 OK ");
}; //H002PromoContactHead02
