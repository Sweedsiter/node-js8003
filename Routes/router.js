const express = require("express");
const router = express.Router();
const { addhaeder } = require("../controllers/Header");
const { login, logut } = require("../controllers/Login-out/Login_out"); // Log in and Log out
const { H001 } = require("../controllers/Home/HomePage001");
const { home, PageColor } = require("../controllers/controller");
const multer = require("multer");
const {
  H002Promo01,
  H002Promo02,
  H002Promo03,
  H002Promo04,
  H002PromoDetails,
  H002PromoContactHead01,
  H002PromoContactHead02,
  H002PromoContactHead03,
} = require("../controllers/Home/HomePage002");

// Logo Upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/avatar/logo");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + ".jpg");
  },
});
const uploadlogo = multer({
  storage: storage,
});
// H001 backgrougd Upload
const storageH001 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/avatar/Home");
  },
  filename: function (req, file, callback) {
    callback(null, "H001BG" + ".jpg");
  },
});
const uploadH001BG = multer({
  storage: storageH001,
});

// H002 Upload img promo01
const storageH002promo01 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/avatar/Home/H002/promo01");
  },
  filename: function (req, file, callback) {
    callback(null, "H002promo01" + ".jpg");
  },
});
const uploadH002 = multer({
  storage: storageH002promo01,
});

// H002 Upload img promo02
const storageH002promo02 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/avatar/Home/H002/promo02");
  },
  filename: function (req, file, callback) {
    callback(null, "H002promo02" + ".jpg");
  },
});
const uploadH002promo02 = multer({
  storage: storageH002promo02,
});

// H002 Upload img promo03
const storageH002promo03 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/avatar/Home/H002/promo03");
  },
  filename: function (req, file, callback) {
    callback(null, "H002promo03" + ".jpg");
  },
});
const uploadH002promo03 = multer({
  storage: storageH002promo03,
});

// H002 Upload img promo04
const storageH002promo04 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/avatar/Home/H002/promo04");
  },
  filename: function (req, file, callback) {
    callback(null, "H002promo04" + ".jpg");
  },
});
const uploadH002promo04 = multer({
  storage: storageH002promo04,
});
// H002 Upload img promo04
const storageH002promoDetails = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/avatar/Home/H002/promoDetail");
  },
  filename: function (req, file, callback) {
    callback(null, "H002promoDetails" + ".jpg");
  },
});
const uploadH002promoDetails = multer({
  storage: storageH002promoDetails,
});

// H002 Upload img promo04
const storageH002promoContactHead01 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/avatar/Home/H002/promoContactHead01");
  },
  filename: function (req, file, callback) {
    callback(null, "H002promoContactHead01" + ".jpg");
  },
});
const uploadH002promoContactHead01 = multer({
  storage: storageH002promoContactHead01,
});

// H002promoContactHead02
const storageH002promoContactHead02 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/avatar/Home/H002/promoContactHead02");
  },
  filename: function (req, file, callback) {
    callback(null, "H002promoContactHead02" + ".jpg");
  },
});
const uploadH002promoContactHead02 = multer({
  storage: storageH002promoContactHead02,
});

// H002promoContactHead03
const storageH002promoContactHead03 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/avatar/Home/H002/promoContactHead03");
  },
  filename: function (req, file, callback) {
    callback(null, "H002promoContactHead03" + ".jpg");
  },
});
const uploadH002promoContactHead03 = multer({
  storage: storageH002promoContactHead03,
});
// Home page all details------------------------------------------------------------------------
router.get("/", home);
router.post("/addheader", uploadlogo.single("logoimg"), addhaeder); // การแก้ Header
router.post("/HomeEdit001", uploadH001BG.single("H001BG"), H001);
router.post(
  "/HomeEdit002/promo01",
  uploadH002.single("promo01Img"),
  H002Promo01,
); // การแก้ H002-promo01
router.post(
  "/HomeEdit002/promo02",
  uploadH002promo02.single("promo02Img"),
  H002Promo02,
); // การแก้ H002-promo02
router.post(
  "/HomeEdit002/promo03",
  uploadH002promo03.single("promo03Img"),
  H002Promo03,
); // การแก้ <H002-promo03></H002-promo03>
router.post(
  "/HomeEdit002/promo04",
  uploadH002promo04.single("promo04Img"),
  H002Promo04,
); // การแก้ H002-promo04
router.post(
  "/HomeEdit002/promoDetails",
  uploadH002promoDetails.single("promoDetailsImg"),
  H002PromoDetails,
); // การแก้ H002-promoDetail

//H002 promoContactHeads---------------------------------------------------
router.post(
  "/HomeEdit002/promoContactHead01",
  uploadH002promoContactHead01.single("promoContactHead01Img"),
  H002PromoContactHead01,
); //uploadH002promoContactHead01
router.post(
  "/HomeEdit002/promoContactHead02",
  uploadH002promoContactHead02.single("promoContactHead02Img"),
  H002PromoContactHead02,
); //uploadH002promoContactHead02
router.post(
  "/HomeEdit002/promoContactHead03",
  uploadH002promoContactHead03.single("promoContactHead03Img"),
  H002PromoContactHead03,
); //uploadH002promoContactHead03

// Products All show------------------------
router.get("/product", (req, res) => {
  res.render("Product");
});

// About All show-------------------------
router.get("/about", (req, res) => {
  res.render("About");
});

// Contact All show--------------------------
router.get("/contact", (req, res) => {
  res.render("Contact");
});

// post

router.post("/PageColor", PageColor); // การแก้

router.post("/login", login);

// Dashboard Addmin
router.get("/login", (req, res) => {
  res.render("Login");
});
router.get("/dashboard", (req, res) => {
  res.render("Dashboard");
  // if (req.session.login) {
  //   res.render("Dashboard");
  // } else {
  //   res.render("Login");
  // }
});
router.get("/logout", logut);

module.exports = router;
