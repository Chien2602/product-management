const express = require("express");
const router = express.Router();
const adminModel = require("../model/admin.model"); // Fixed variable name for admin model
const customerModel = require("../model/customer.model"); 
const mongoose = require("mongoose");

const auth = require("../controllers/auth.controller");

router.get("/register", auth.register);
router.get("/login", auth.login);

router.post('/login', async (req, res) => {
    const { loginUsername, loginPassword } = req.body;
    console.log("Entered Username:", loginUsername);
    console.log("Entered Password:", loginPassword);

    try {
        // Find admin in the database
        const Admin = await adminModel.findOne({ adminName: loginUsername });
        const Customer = await customerModel.findOne({ Username: loginUsername });

        if (Admin && loginPassword === Admin.passWord) { // Replace with bcrypt.compare if passwords are hashed
            // Save login status in the session
            req.session.loggedIn = true;

            // Create a login object
            const LogIn = {
                adminName: loginUsername,
                adminID: Admin.adminID, // Assuming MongoDB _id is the admin ID
                passWord: Admin.passWord,
                fullname: Admin.FullName,
            };

            // Save login info in a cookie (replace localStorage logic)
            res.cookie("login", JSON.stringify(LogIn), {
                httpOnly: false,      // Cho phép truy cập cookie từ JavaScript client
                secure: false,        // Chỉ đặt `true` khi sử dụng HTTPS trong môi trường sản xuất
                sameSite: "Lax",     // Cho phép cookie được gửi giữa các nguồn khác nhau
                maxAge: 3600000       // Thời gian sống của cookie là 1 giờ (tính bằng milliseconds)
            });
            
            // Redirect to dashboard
            res.redirect('/admin/product');
        } 
        else if(Customer && loginPassword === Customer.Password){
          req.session.loggedIn = true;

          // Create a login object
          const LogIn = {
              Username: Customer.Username,
              cusID: Customer.cusID, // Assuming MongoDB _id is the admin ID
              Password: Customer.Password,
          };

          // Save login info in a cookie (replace localStorage logic)
          res.cookie("login", JSON.stringify(LogIn), {
              httpOnly: false,      // Prevent access via client-side JavaScript
              secure: false,       // Use `true` in production with HTTPS
              sameSite: "Strict",  // Protect against CSRF
              maxAge: 3600000      // 1 hour (in milliseconds)
          });

          // Redirect to dashboard
          res.redirect('/product');
        }
        else {
            res.status(401).send("Invalid credentials");
        }
    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).send("Server error");
    }
});

module.exports = router;
