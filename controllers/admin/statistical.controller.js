module.exports.index = (req, res) => {
    res.render("../views/admin/statistical.pug", {
        title: "Trang thống kê"
    })
}