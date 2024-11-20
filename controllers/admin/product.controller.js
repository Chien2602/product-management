const product = require("../../model/product.model");

module.exports.index = async(req, res) => {
    const product_item = await product.find({
        status: 'active'
    });
    console.log(product_item);
    res.render("../views/admin/product.pug", {
        title: "Trang sản phẩm"
    })
}