module.exports.index = async(req, res) => {
    res.render("../views/client/account.pug", {
        title: "Trang tài khoản"
    })
}