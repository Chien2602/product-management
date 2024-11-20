const express = require("express");
const router = express.Router();
const employee = require("../../controllers/admin/employee.controller");

router.use("/employee", employee.index);

module.exports = router;