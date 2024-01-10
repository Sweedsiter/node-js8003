const express = require("express");
const app = express();
const port = 8003;
const cookieParser = require("cookie-parser");
const session = require("express-session");
require("dotenv").config();
const path = require("path");
app.use(express.urlencoded({ extended: false }));

// ระบบ Login
app.use(
  session({ secret: "mysession", resave: false, saveUninitialized: false }),
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// map file controller
const { readdirSync } = require("fs");
readdirSync("./Routes").map((r) => app.use(require("./Routes/" + r)));

// EJS file list แสดงหน้าเว็บ
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// อ่านไฟล์ public ที่แสดง CSS IMG AVATAR
app.use(express.static(__dirname + "/public"));

// Port ที่จ่ายออกไป
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
