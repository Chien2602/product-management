module.exports.index = (req, res) => {
    res.render("../views/admin/employee.pug", {
        title: "Trang quản lý nhân viên"
    })
}