const express = require("express");
const router = express.Router();
const customer = require("../../controllers/admin/customer.controller");

router.use("/customer", customer.index);

module.exports = router;