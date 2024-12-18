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
        // Truy vấn dữ liệu giỏ hàng dựa trên idUser (cusID)
        const historyItem = await history.find({ idUser: decodedCookie });

        if (!historyItem || historyItem.length === 0) {
            return res.render("../views/client/history.pug", {
                title: "Trang lịch sử mua hàng",
                historyItem: [],
                message: "Giỏ hàng của bạn hiện đang trống.",
            });
        }

        // Render trang Pug và truyền dữ liệu vào
        res.render("../views/client/history.pug", {
            title: "Trang giỏ hàng",
            historyItem: historyItem,
        });
    } catch (error) {
        console.error("Lỗi khi truy cập giỏ hàng:", error);
        res.status(500).send("Có lỗi xảy ra khi truy cập giỏ hàng");
    }
};