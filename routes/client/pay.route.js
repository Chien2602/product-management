const express = require("express");
const router = express.Router();
const pay = require("../../controllers/client/pay.controller")

router.use("/pay", pay.index)

module.exports = router;