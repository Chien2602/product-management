const express = require("express");
const router = express.Router();
const cart = require("../../controllers/client/cart.controller");

// Define routes using the appropriate HTTP methods
router.use("/cart", cart.index); // Display the cart page (GET request)
router.use("/update", cart.updateToCart); // Update cart item quantity (POST request)
router.use('/delete/:id', cart.deleteToCart); // Delete cart item (DELETE request)
router.use('/addHistory', cart.addToHistory); 
module.exports = router;

