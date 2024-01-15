const express = require("express");
const router = express.Router();
const { addhaeder } = require("../controllers/Header");
const { login, logut } = require("../controllers/Login-out/Login_out"); // Log in and Log out
const { H001 } = require("../controllers/Home/HomePage001");
const { home, PageColor } = require("../controllers/controller");
const multer = require("multer");
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
    callback(null, Date.now() + ".jpg");
  },
});
const uploadH001BG = multer({
  storage: storageH001,
});

router.get("/", home);
router.post("/HomeEdit001", uploadH001BG.single("H001BG"), H001);
router.post("/HomeEdit002", (req, res) => {
  res.render("Dashboard");
  console.log(req.body);
});

router.get("/product", (req, res) => {
  res.render("Product");
});
router.get("/about", (req, res) => {
  res.render("About");
});
router.get("/contact", (req, res) => {
  res.render("Contact");
});

// post

router.post("/addheader", uploadlogo.single("logoimg"), addhaeder); // การแก้
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
