const express = require("express");
const router = express.Router();
const home = require("../../controllers/client/home.controller")

router.use("/home", home.index)
router.use("/add/product/home", home.addToCart)
module.exports = router;