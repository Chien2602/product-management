const express = require("express");
const router = express.Router();
const home = require("../../controllers/admin/dashboard.controller")

router.use("/dashboard", home.index)

module.exports = router;