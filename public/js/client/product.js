document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const saveCartToLocalStorage = (cart) => {
        const updatedCart = cart.filter(item => item.soLuong > 0); // Loại bỏ sản phẩm đã xóa
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const saveCartToCookie = (cart) => {
        const cookieValue = JSON.stringify(cart);
        document.cookie = `cart=${encodeURIComponent(cookieValue)}; path=/; max-age=${24*60*60};`; // Cookie sống 1 ngày
    };

    // Thêm sản phẩm vào giỏ hàng
    document.querySelector("#product-list").addEventListener("click", (event) => {
        const button = event.target.closest(".btn.btn-primary");
        if (button) {
            const productId = button.dataset.id;
            const productTitle = button.dataset.title;
            const productPrice = button.dataset.price;
            const productThumbnail = button.dataset.thumbnail;
    
            const product = {
                maSanPham: productId,
                tenSanPham: productTitle,
                gia: parseFloat(productPrice),
                hinhAnh: productThumbnail,
                soLuong: 1,
            };
    
            // Gọi API để thêm vào giỏ hàng
            fetch('/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    idUser: "user123", // Bạn có thể thay ID user theo cách của bạn
                    ...product
                }),
            })
            .then((response) => response.json())
            .then((data) => {
                if (data.message) {
                    alert(data.message);
                }
            })
            .catch((error) => {
                console.error('Lỗi khi gọi API:', error);
                alert('Lỗi khi thêm sản phẩm vào giỏ hàng.');
            });
        }
    });
    

    // Xử lý sự kiện nhấn vào phần khác ngoài nút "Add to Cart"
    document.querySelectorAll(".product-item").forEach((productItem) => {
        productItem.addEventListener("click", (event) => {
            if (!event.target.closest(".btn.btn-primary")) { // Nếu không phải nút "Add to Cart"
                const button = productItem.querySelector(".btn.btn-primary");
                const productId = button.dataset.id;
                const productTitle = button.dataset.title;
                const productPrice = button.dataset.price;
                const productThumbnail = button.dataset.thumbnail;
                const productmoTa = button.dataset.abc;
                const product = {
                    maSanPham: productId,
                    tenSanPham: productTitle,
                    gia: parseFloat(productPrice),
                    hinhAnh: productThumbnail,
                    moTa: productmoTa,
                    soLuong: 1,
                };
                saveCartToCookie(product); // Lưu vào cookie khi nhấn vào sản phẩm
                window.location.href = "/productInformation";
            }
        });
    });

    // Tìm kiếm sản phẩm
    const url = new URL(window.location.href);
    const input = document.querySelector(".inputText");
    if (input) {
        input.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                url.searchParams.set("tenSanPham", input.value);
                window.location.href = url.toString();
            }
        });
    }

    // Xử lý lọc theo thể loại
    const priceFilter = document.querySelector("#filter-price");
    if (priceFilter) {
        priceFilter.addEventListener("change", () => {
            url.searchParams.set("theLoai", priceFilter.value);
            window.location.href = url.toString();
        });
    }

    // Xử lý lọc theo giá
    const discountFilter = document.querySelector("#filter-discount");
    if (discountFilter) {
        discountFilter.addEventListener("change", () => {
            url.searchParams.set("gia", discountFilter.value);
            window.location.href = url.toString();
        });
    }
});