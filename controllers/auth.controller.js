module.exports.register = (req, res) => {
    res.render("../views/register.pug", {
        title: "Trang đăng ký"
    })
}

module.exports.login = (req, res) => {
    res.render("../views/login.pug", {
        title: "Trang đăng nhập"
    })
}
