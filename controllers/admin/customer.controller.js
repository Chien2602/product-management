const Customer = require("../../model/customer.model");
const user = require("../../model/customer.model");

module.exports.index = async(req, res) => {
    let find = {};
    if (req.query.FullName) {
        const searchTerm = req.query.FullName.replace(/\+/g, ' ');
        find.FullName = { $regex: searchTerm, $options: 'i' };
        console.log(find.FullName);
    }
    console.log(find);
    const users = await user.find(find);
    console.log(users);
    res.render("../views/admin/customer.pug", {
        title: "Trang khách hàng",
        users: users,
        header: "Danh sách Khách hàng"
    })
}


module.exports.deleteCustomer = async (req, res) => {
    try {
        const { _id } = req.params;  // Lấy id sản phẩm từ params

        // Tìm và xóa sản phẩm theo _id của sản phẩm
        const deletedProduct = await Customer.findByIdAndDelete(_id);  // Tìm theo _id của sản phẩm

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Sản phẩm không tìm thấy!' });
        }

        res.status(200).json({ message: 'Sản phẩm đã được xóa thành công!' });
    } catch (err) {
        res.status(500).json({ message: 'Lỗi khi xóa sản phẩm', error: err.message });
    }
};