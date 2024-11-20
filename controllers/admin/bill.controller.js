module.exports.index = (req, res) => {
    res.render("../views/admin/bill.pug", {
        title: "Trang hóa đơn"
    })
}