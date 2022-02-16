const express = require("express");
const HomeController = require("../controllers/HomeController.js");

const router = express.Router();

router.get("/", HomeController.home);

module.exports = router;
