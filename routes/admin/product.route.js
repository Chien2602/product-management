const express = require("express");
const router = express.Router();
const product = require("../../controllers/admin/product.controller");

router.use("/product", product.index);
router.use('/deleteProduct/:id', product.deleteProduct);

module.exports = router;