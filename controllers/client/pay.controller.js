module.exports.index = async(req, res) => {
    res.render("../views/client/pay.pug", {
        title: "Trang thanh toán"
    })
}