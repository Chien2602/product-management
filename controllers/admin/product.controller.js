const product = require("../../model/product.model");

module.exports.index = async(req, res) => {
    let find = {};
    if (req.query.tenSanPham) {
        const searchTerm = req.query.tenSanPham.replace(/\+/g, ' ');
        find.tenSanPham = { $regex: searchTerm, $options: 'i' };
        console.log(find.tenSanPham);
    }
    console.log(find);
    const products = await product.find(find);
    res.render("../views/admin/product.pug", {
        title: "Trang sản phẩm",
        products: products,
        header: "Danh sách sản phẩm"
    })
}



module.exports.updateProduct = async (req, res) => {
    try {
        const { idProduct } = req.params;  // Lấy id sản phẩm từ params
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

        // Tìm sản phẩm theo id và cập nhật các trường
        const updatedProduct = await cart.findByIdAndUpdate(
            idProduct,  // Tìm theo _id của sản phẩm
            { 
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
            }, 
            { new: true }  // Trả về bản ghi mới sau khi cập nhật
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Sản phẩm không tìm thấy!' });
        }

        res.status(200).json({ message: 'Cập nhật sản phẩm thành công!', data: updatedProduct });
    } catch (err) {
        res.status(500).json({ message: 'Lỗi khi cập nhật sản phẩm', error: err.message });
    }
};


module.exports.deleteProduct = async (req, res) => {
    try {
        const { _id } = req.params;  // Lấy id sản phẩm từ params

        // Tìm và xóa sản phẩm theo _id của sản phẩm
        const deletedProduct = await product.findByIdAndDelete(_id);  // Tìm theo _id của sản phẩm

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Sản phẩm không tìm thấy!' });
        }

        res.status(200).json({ message: 'Sản phẩm đã được xóa thành công!' });
    } catch (err) {
        res.status(500).json({ message: 'Lỗi khi xóa sản phẩm', error: err.message });
    }
};
