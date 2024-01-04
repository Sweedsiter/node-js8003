const express = require("express");
const router = express.Router();
const { addhaeder } = require("../controllers/Header");
const { home, heatEdit } = require("../controllers/controller");

router.get("/", home);
router.get("/heat/edit", heatEdit);

router.post("/addheader", addhaeder);

module.exports = router;
