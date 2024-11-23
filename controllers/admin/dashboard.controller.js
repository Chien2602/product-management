module.exports.index = (req, res) => {
    res.render("../views/admin/dashboard.pug", {
        title: "Trang chủ"
    })
}