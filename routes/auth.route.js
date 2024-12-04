const express = require("express");
const router = express.Router();

const auth = require("../controllers/auth.controller");

router.get("/register", auth.register);
router.get("/login", auth.login);

router.post('/login', (req, res) => {
    const { loginUsername, loginPassword } = req.body;
    console.log("Entered Username:", loginUsername);
    console.log("Entered Password:", loginPassword);
    if (loginUsername === 'admin' && loginPassword === 'password') {
      req.session.loggedIn = true;
      res.redirect('/admin/dashboard');
    } else {
      res.send('Invalid credentials');
    }
});

module.exports = router;

