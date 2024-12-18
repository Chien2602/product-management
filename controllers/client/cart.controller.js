const cart = require("../../model/cart.model");
const history = require("../../model/history.model");
// Hàm getCookie sử dụng req.cookies
function getCookie(req, name) {
    return req.cookies && req.cookies[name] ? req.cookies[name] : null;
}

module.exports.index = async (req, res) => {
    try {
        // Lấy cookie "login" bằng hàm getCookie
        const loginCookie = getCookie(req, "login");

        if (!loginCookie) {
            return res.status(401).send("Bạn chưa đăng nhập");
        }

        // Giải mã cookie và lấy cusID
        const decodedCookie = JSON.parse(decodeURIComponent(loginCookie));
        const cusID = decodedCookie.cusID;

        if (!cusID) {
            return res.status(400).send("Dữ liệu không hợp lệ");
        }

        // Truy vấn dữ liệu giỏ hàng dựa trên idUser (cusID)
        const cartItems = await cart.find({ idUser: cusID });

        if (!cartItems || cartItems.length === 0) {
            return res.render("../views/client/cart.pug", {
                title: "Trang giỏ hàng",
                cartItems: [],
                message: "Giỏ hàng của bạn hiện đang trống.",
            });
        }

        // Render trang Pug và truyền dữ liệu vào
        res.render("../views/client/cart.pug", {
            title: "Trang giỏ hàng",
            cartItems: cartItems,
        });
    } catch (error) {
        console.error("Lỗi khi truy cập giỏ hàng:", error);
        res.status(500).send("Có lỗi xảy ra khi truy cập giỏ hàng");
    }
};

module.exports.updateToCart = async (req, res) => {
    try {
        const { _id, soLuong } = req.body;

        // Kiểm tra dữ liệu đầu vào
        if (!_id || !soLuong || soLuong <= 0) {
            return res.status(400).json({ message: "Dữ liệu không hợp lệ" });
        }

        // Cập nhật số lượng sản phẩm trong giỏ hàng
        const result = await cart.updateOne(
            { _id }, // Tìm sản phẩm dựa vào ID
            { $set: { soLuong } } // Cập nhật số lượng
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Sản phẩm không tồn tại" });
        }

        res.status(200).json({ message: "Cập nhật thành công" });
    } catch (error) {
        console.error("Lỗi khi cập nhật giỏ hàng:", error);
        res.status(500).json({ message: "Lỗi server", error: error.message });
    }
};

module.exports.deleteToCart = async (req, res) => {
    try {
        const { id } = req.params;

        // Validate ID
        if (!id || typeof id !== "string" || id.trim() === "") {
            return res.status(400).json({ message: "ID sản phẩm không hợp lệ" });
        }

        // Attempt to delete the product from the cart (assuming 'cart' is your model/collection)
        const result = await cart.deleteOne({ _id: id });  // Thay 'maSanPham' nếu sử dụng '_id'

        // Handle cases where the product does not exist
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Sản phẩm không tồn tại" });  // Trả về 404 thay vì 200
        }

        // Success response
        return res.status(200).json({ message: "Xóa sản phẩm thành công" });
    } catch (error) {
        console.error("Lỗi khi xóa sản phẩm:", error);

        // Return a server error response
        return res.status(500).json({ message: "Lỗi server", error: error.message });
    }
};

module.exports.addToHistory = async (req, res) => {
    try {
        const { idUser, maSanPham, tenSanPham, gia, hinhAnh, soLuong, thoiGian } = req.body;

        // Tạo bản ghi mới
        const newCartItem = new history({
            idUser,
            maSanPham,
            tenSanPham,
            gia,
            hinhAnh,
            soLuong,
            thoiGian
        });

        // Lưu vào database
        const savedItem = await newCartItem.save();
        res.status(201).json({ message: 'Thêm vào giỏ hàng thành công!', data: savedItem });
    } catch (err) {
        res.status(500).json({ message: 'Lỗi khi thêm sản phẩm vào giỏ hàng', error: err.message });
    }
};