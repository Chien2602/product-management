const express = require("express");
const router = express.Router();
const statistical = require("../../controllers/admin/statistical.controller");

router.use("/statistical", statistical.index);

module.exports = router;