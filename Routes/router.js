const express = require("express");
const router = express.Router();
const { addhaeder, addmin } = require("../controllers/Header");
const { home } = require("../controllers/controller");

router.get("/", home);
router.get("/addmin", addmin);

router.post("/addheader", addhaeder);

module.exports = router;
