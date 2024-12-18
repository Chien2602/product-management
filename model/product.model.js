const mongoose = require('mongoose');
const {models} = require("mongoose");

const productShema = new mongoose.Schema({
    maSanPham: String,
    tenSanPham: String,
    tacGia: String,
    NXB: String,
    theLoai: String,
    namXB: Number,
    gia: Number,
    moTa: String,
    soLuong: Number,
    hinhAnh: String,
    trangThai: String,
});
const Product = mongoose.model('Product', productShema, 'product');
module.exports = Product;