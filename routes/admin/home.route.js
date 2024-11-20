const express = require("express");
const router = express.Router();
const home = require("../../controllers/admin/home.controller")

router.use("/home", home.index)

module.exports = router;