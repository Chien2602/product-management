module.exports.index = (req, res) => {
    res.render("../views/admin/account.pug", {
        title: "Trang thông tin tài khoản"
    })
}