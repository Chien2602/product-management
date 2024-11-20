const express = require("express");
const router = express.Router();
const employee = require("../../controllers/admin/bill.controller");

router.use("/bill", employee.index);

module.exports = router;