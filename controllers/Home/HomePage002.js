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
  await res.render("Dashboard");
  console.log("HomeEdit Two ");
};
