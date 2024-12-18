const product = require("../../model/product.model");
const employee = require("../../model/employee.model");
const customer = require("../../model/customer.model");

module.exports.index = async (req, res) => {
    try {
        // Đếm số lượng item trong mỗi bảng
        const totalProducts = await product.estimatedDocumentCount();
        const totalEmployees = await employee.estimatedDocumentCount();
        const totalCustomers = await customer.estimatedDocumentCount();
        const products = await product.find({});
        // Render giao diện kèm dữ liệu
        res.render("../views/admin/dashboard.pug", {
            title: "Trang chủ",
            stats: {
                totalProducts,
                totalEmployees,
                totalCustomers
            },
            products: products
        });
    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu thống kê:", error);
        res.status(500).send("Có lỗi xảy ra khi truy cập trang chủ.");
    }
};
