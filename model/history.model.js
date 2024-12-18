const mongoose = require('mongoose');
const {models} = require("mongoose");

const historyShema = new mongoose.Schema({
    idUser: Object,
    maSanPham: String,
    tenSanPham: String,
    gia: Number,
    hinhAnh: String,
    soLuong: Number,
    thoiGian: String
});
const History = mongoose.model('History', historyShema, 'history');
module.exports = History;