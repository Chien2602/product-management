module.exports.index = async(req, res) => {
    res.render("../views/client/cart.pug", {
        title: "Trang giỏ hàng"
    })
}