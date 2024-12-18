const product = require("../../model/product.model");
const cart = require("../../model/cart.model");
module.exports.index = async(req, res) => {
    let find = {};
    if (req.query.tenSanPham) {
        const searchTerm = req.query.tenSanPham.replace(/\+/g, ' '); // Xử lý dấu +
        find.tenSanPham = { $regex: searchTerm, $options: 'i' };
        console.log(find.tenSanPham);
    }
    if(req.query.gia){
        if(req.query.gia === "10"){
            find.gia = {$lt: 10000};
        }
        else if(req.query.gia === "50"){
            find.gia = { $gte: 10000, $lte: 50000 };
        }
        else if(req.query.gia === "50+"){
            find.gia = { $gte: 50000};
        }
    }

    if(req.query.theLoai){
        if(req.query.theLoai === 'sgk'){
            find.theLoai = 'SGK';
        }
        else if(req.query.theLoai === 'dodung'){
            find.theLoai = 'Văn phòng phẩm';
        }
        else if(req.query.theLoai === 'giaotrinh'){
            find.theLoai = 'Giáo trình';
        }
        else if (req.query.theLoai === 'truyentranh_tieuthuyet') {
            find.$or = [
                { theLoai: "Tiểu thuyết" },
                { theLoai: "Truyện" }
            ];
        }
        
    }
    console.log(req.query);
    const products = await product.find(find);
    res.render("../views/client/product.pug", {
        title: "Trang sản phẩm",
        products: products,
        header: "Danh sách sản phẩm"
    })
}

module.exports.addToCart = async (req, res) => {
    try {
        const { idUser, maSanPham, tenSanPham, gia, hinhAnh, soLuong } = req.body;

        // Tạo bản ghi mới
        const newCartItem = new cart({
            idUser,
            maSanPham,
            tenSanPham,
            gia,
            hinhAnh,
            soLuong
        });

        // Lưu vào database
        const savedItem = await newCartItem.save();
        res.status(201).json({ message: 'Thêm vào giỏ hàng thành công!', data: savedItem });
    } catch (err) {
        res.status(500).json({ message: 'Lỗi khi thêm sản phẩm vào giỏ hàng', error: err.message });
    }
};

