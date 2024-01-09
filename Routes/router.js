const express = require("express");
const router = express.Router();
const { addhaeder } = require("../controllers/Header");
const { home } = require("../controllers/controller");
const fs = require("fs");

router.get("/", home);

router.get("/product", (req, res) => {
  res.render("Product");
  fs.unlink("./public/avatar/logo/idea.png", function () {
    console.log("File deleted!");
  });
});
router.get("/about", (req, res) => {
  res.render("About");
});
router.get("/contact", (req, res) => {
  res.render("Contact");
});

// post

router.post("/addheader", addhaeder); // การแก้
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
