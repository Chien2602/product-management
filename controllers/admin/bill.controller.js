const bill = require("../../model/bill.model")
module.exports.index = async(req, res) => {
    let find = {};
    console.log(find);
    const products = await bill.find(find);
    res.render("../views/admin/bill.pug", {
        title: "Trang hóa đơn",
        products: products,
        header: "Danh sách hóa đơn"
    })
}
