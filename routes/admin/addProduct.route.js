const express = require("express");
const router = express.Router();
const product = require("../../controllers/admin/addProduct.controller");

router.use("/addProduct", product.index);

router.use("/addToProduct/product", product.addToProduct);
module.exports = router;