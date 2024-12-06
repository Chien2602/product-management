const product = require("../../model/product.model");

module.exports.index = async(req, res) => {
    let find = {};
    if (req.query.title) {
        // Chuyển dấu + thành dấu cách và gán vào find.title
        const searchTerm = req.query.title.replace(/\+/g, ' '); // Xử lý dấu +
        find.title = { $regex: searchTerm, $options: 'i' };
        console.log(find.title);
    }
    if (req.query.discountPercentage) {
        find.discountPercentage = { $gt: req.query.discountPercentage }; // Add a condition to filter by discountPercentage
    }
    console.log(req.query);
    const products = await product.find(find);
    res.render("../views/client/product.pug", {
        title: "Trang sản phẩm",
        products: products,
        header: "Danh sách sản phẩm"
    })
}