const express = require("express");
const router = express.Router();
const history = require("../../controllers/client/history.controller");

// Define routes using the appropriate HTTP methods
router.use("/history", history.index); // Display the cart page (GET request)
module.exports = router;