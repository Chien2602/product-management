const express = require("express");
const router = express.Router();
const employee = require("../../controllers/admin/employee.controller");

router.use("/employee", employee.index);
router.use('/deleteEmployee/:_id', employee.deleteEmployee);
module.exports = router;