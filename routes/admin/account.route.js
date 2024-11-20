const express = require("express");
const router = express.Router();
const account = require("../../controllers/admin/account.controller");

router.use("/account", account.index);

module.exports = router;