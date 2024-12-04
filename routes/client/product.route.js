const express = require("express");
const router = express.Router();
const product = require("../../controllers/client/product.controller")

router.use("/product", product.index)

module.exports = router;