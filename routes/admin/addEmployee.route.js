const express = require("express");
const router = express.Router();
const employee = require("../../controllers/admin/addEmployee.controller");

router.use("/addEmployee", employee.index);
router.use("/addToEmployee/employee", employee.addToEmployee);
module.exports = router;