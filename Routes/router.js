const express = require("express");
const router = express.Router();
const { home, heatEdit } = require("../controllers/controller");

router.get("/", home);
router.get("/heat/edit", heatEdit);

module.exports = router;
