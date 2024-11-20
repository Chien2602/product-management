const express = require("express");
const router = express.Router();
const product = require("../../controllers/admin/product.controller");

router.use("/product", product.index);

module.exports = router;