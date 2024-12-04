const express = require("express");
const router = express.Router();
const productInformation = require("../../controllers/client/productInformation.controller")

router.use("/productInformation", productInformation.index)

module.exports = router;