module.exports.index = (req, res) => {
    res.render("../views/admin/customer.pug", {
        title: "Trang quản lý khách hàng"
    })
}