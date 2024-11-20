const mongoose = require("mongoose");

module.exports.connect = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/product-management");
        console.log("connect!");
    } catch(error) {
        console.log(error);
    }
}