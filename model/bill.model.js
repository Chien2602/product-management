const mongoose = require('mongoose');
const {models} = require("mongoose");

const HDShema = new mongoose.Schema({
    maHD: String,
    tenHD: String,
    ngayTaoHD: Date,

});
const Bill = mongoose.model('Bill', HDShema, 'bill');
module.exports = Bill;