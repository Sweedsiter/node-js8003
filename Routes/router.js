const express = require("express");
const router = express.Router();
const { addhaeder } = require("../controllers/Header");
const { H001 } = require("../controllers/HomePage");
const { home, PageColor } = require("../controllers/controller");
const multer = require("multer");

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
console.log();

router.get("/", home);
router.post("/HomeEdit001", H001);

router.get("/product", (req, res) => {
  res.render("Product");
  // const fs = require("fs");
  // fs.unlink("./public/avatar/logo/idea.png", function () {
  //   console.log("File deleted!");
  // });
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

router.post("/login", (req, res) => {
  const name = process.env.USERNAME;
  const pass = process.env.PASSWORD;
  const username = req.body.username;
  const password = req.body.password;
  const timeExpire = 18000; //1นาที เท่ากับ 6000
  if (username === name && password === pass) {
    req.session.username = username;
    req.session.password = password;
    req.session.login = true;
    req.session.cookie.maxAge = timeExpire;
    res.render("Dashboard");
  } else {
    res.redirect("/");
  }
  console.log("Addmin Login");
});

// Dashboard Addmin
router.get("/dashboard", (req, res) => {
  if (req.session.login) {
    res.render("Dashboard");
  } else {
    res.render("Login");
  }
});
router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    res.redirect("/");
  });
});

module.exports = router;
