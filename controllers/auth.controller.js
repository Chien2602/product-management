module.exports.login = (req, res) => {
    // Handle GET request for login (render login form)
    res.render("../views/login.pug", {
        title: "Trang đăng nhập"
    });
};


module.exports.register = (req, res) => {
    // Render the registration page
    res.render("../views/register.pug", {
        title: "Trang đăng ký"
    });
};

// Authentication Middleware to protect routes
module.exports.isAuthenticated = (req, res, next) => {
    // Check for the username in query parameters or session
    const loginUsername = req.query.username || req.session.user;

    if (loginUsername) {
        // If the username exists (either in the query or session), proceed to the next route
        return next();
    } else {
        // If not authenticated, redirect to the login page
        return res.redirect("/login");
    }
};
