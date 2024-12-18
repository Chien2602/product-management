const employee = require("../../model/employee.model");

module.exports.index = (req, res) => {
    res.render("../views/admin/addEmployee.pug", {
        title: "Trang thêm nhân viên"
    })
}


module.exports.addToEmployee = async (req, res) => {
    try {
        // Lấy thông tin từ body
        const {
            maNhanVien, 
            hoTen, 
            gioiTinh, 
            ngaySinh, 
            diaChi, 
            sdt,
            email, 
            luong
        } = req.body;

        // Tạo bản ghi mới
        const Employee = new employee({
            maNhanVien, 
            hoTen, 
            gioiTinh, 
            ngaySinh, 
            diaChi,
            sdt, 
            email, 
            luong
        });

        // Lưu vào database
        const savedItem = await Employee.save();
        res.status(201).json({ message: 'Nhân viên đã được thêm thành công!', data: savedItem });
    } catch (err) {
        res.status(500).json({ message: 'Lỗi khi thêm Nhân viên vào giỏ hàng', error: err.message });
    }
};