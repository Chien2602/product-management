const product = require("../../model/product.model");

module.exports.index = async(req, res) => {
    const products = await product.find({});
    console.log(products);
    res.render("../views/admin/product.pug", {
        title: "Trang sản phẩm",
        products: products,
        header: "Danh sách sản phẩm"
    })
}