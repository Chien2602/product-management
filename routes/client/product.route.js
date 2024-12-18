const express = require("express");
const router = express.Router();
const product = require("../../controllers/client/product.controller")

router.use("/product", product.index)
router.use("/add/product", product.addToCart)
module.exports = router;