module.exports.index = async(req, res) => {
    res.render("../views/client/home.pug", {
        title: "Trang chủ"
    })
}