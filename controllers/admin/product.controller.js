const product = require("../../model/product.model");

module.exports.index = async(req, res) => {
    let find = {};
    if (req.query.title) {
        const searchTerm = req.query.title.replace(/\+/g, ' ');
        find.title = { $regex: searchTerm, $options: 'i' };
        console.log(find.title);
    }
    const products = await product.find(find);
    // console.log(products);
    res.render("../views/admin/product.pug", {
        title: "Trang sản phẩm",
        products: products,
        header: "Danh sách sản phẩm"
    })
}