const express = require("express");
const router = express.Router();
const cart = require("../../controllers/client/cart.controller")

router.use("/cart", cart.index)

module.exports = router;