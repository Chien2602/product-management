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

module.exports.deleteEmployee = async (req, res) => {
    try {
        const { _id } = req.params;  // Lấy id sản phẩm từ params

        // Tìm và xóa sản phẩm theo _id của sản phẩm
        const deletedProduct = await employee.findByIdAndDelete(_id);  // Tìm theo _id của sản phẩm

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Sản phẩm không tìm thấy!' });
        }

        res.status(200).json({ message: 'Sản phẩm đã được xóa thành công!' });
    } catch (err) {
        res.status(500).json({ message: 'Lỗi khi xóa sản phẩm', error: err.message });
    }
};
