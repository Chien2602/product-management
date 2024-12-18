const product = require("../../model/product.model")

module.exports.index = (req, res) => {
    res.render("../views/admin/addProduct.pug", {
        title: "Trang thêm sản phẩm"
    })
}

module.exports.addToProduct = async (req, res) => {
    try {
        // Lấy thông tin từ body
        const {
            maSanPham, 
            tenSanPham, 
            tacGia, 
            NXB, 
            theLoai, 
            namSX, 
            gia, 
            moTa, 
            soLuong, 
            hinhAnh, 
            trangThai 
        } = req.body;

        // Tạo bản ghi mới
        const newProduct = new product({
            maSanPham,
            tenSanPham,
            tacGia,
            NXB,
            theLoai,
            namSX,
            gia,
            moTa,
            soLuong,
            hinhAnh,
            trangThai
        });

        // Lưu vào database
        const savedItem = await newProduct.save();
        res.status(201).json({ message: 'Sản phẩm đã được thêm vào giỏ hàng thành công!', data: savedItem });
    } catch (err) {
        res.status(500).json({ message: 'Lỗi khi thêm sản phẩm vào giỏ hàng', error: err.message });
    }
};