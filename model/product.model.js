const mongoose = require('mongoose');
const {models} = require("mongoose");

const productShema = new mongoose.Schema({
    title: String,
    price: Number,
    quantity: Number,
    total: Number,
    discountPercentage: Number,
    discountedTotal: Number,
    thumbnail: String,
    delete: Boolean,
    status: String,
});
const Product = mongoose.model('Product', productShema, 'product');
module.exports = Product;