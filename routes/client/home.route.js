const express = require("express");
const router = express.Router();
const home = require("../../controllers/client/home.controller")

router.use("/home", home.index)

module.exports = router;