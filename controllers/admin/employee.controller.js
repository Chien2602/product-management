const employee = require("../../model/employee.model");

module.exports.index = async(req, res) => {
    const users = await employee.find({});
    console.log(users);
    res.render("../views/admin/employee.pug", {
        title: "Trang Nhân viên",
        users: users,
        header: "Danh sách Nhân viên"
    })
}