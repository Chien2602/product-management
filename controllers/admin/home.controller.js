module.exports.index = (req, res) => {
    res.render("../views/admin/home.pug", {
        title: "Trang chủ"
    })
}