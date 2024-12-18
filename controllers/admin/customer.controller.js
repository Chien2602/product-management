const user = require("../../model/customer.model");

module.exports.index = async(req, res) => {
    const users = await user.find({});
    console.log(users);
    res.render("../views/admin/customer.pug", {
        title: "Trang khách hàng",
        users: users,
        header: "Danh sách Khách hàng"
    })
}