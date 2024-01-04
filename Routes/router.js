const express = require("express");
const router = express.Router();
const { addhaeder } = require("../controllers/Header");
const { home } = require("../controllers/controller");

router.get("/", home);

router.post("/addheader", addhaeder);

module.exports = router;
