module.exports.index = async(req, res) => {
    res.render("../views/client/productInformation.pug", {
        title: "Trang chi tiết sản phẩm"
    })
}