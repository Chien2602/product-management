const mongoose = require('mongoose');
const {models} = require("mongoose");

const cartShema = new mongoose.Schema({
    idUser: String,
    maSanPham: String,
    tenSanPham: String,
    gia: Number,
    hinhAnh: String,
    soLuong: Number,
});
const Cart = mongoose.model('Cart', cartShema, 'cart');
module.exports = Cart;