const express = require("express");
const router = express.Router();
const customer = require("../../controllers/admin/customer.controller");

router.use("/customer", customer.index);
router.use('/deleteCustomer/:_id', customer.deleteCustomer);
module.exports = router;