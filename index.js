const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session"); // Add session
const port = 3000;

// ADMIN
const auth = require("./routes/auth.route");
const product = require("./routes/admin/product.route");
const dashboard = require("./routes/admin/dashboard.route");
const employee = require("./routes/admin/employee.route");
const statistical = require("./routes/admin/statistical.route");
const bill = require("./routes/admin/bill.route");
const customer = require("./routes/admin/customer.route");
const account = require("./routes/admin/account.route");
const mongoose = require("./connects/connectMongo");

// CLIENT
const homeClient = require("./routes/client/home.route");
const productClient = require("./routes/client/product.route");
const cartClient = require("./routes/client/cart.route");
const productInformationClient = require("./routes/client/productInformation.route");
const payClient = require("./routes/client/pay.route");
const accountClient=require("./routes/client/account.route");
// MONGODB
mongoose.connect()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));
// MIDDLEWARE
const isAuthenticated = (req, res, next) => {
  if (req.session.loggedIn) {
    return next();
  } else {
    res.redirect('/login');
  }
};
// ADMIN
app.use("/admin", isAuthenticated, product);
app.use("/admin", isAuthenticated, dashboard);
app.use("/admin", isAuthenticated, employee);
app.use("/admin", isAuthenticated, statistical);
app.use("/admin", isAuthenticated, bill);
app.use("/admin", isAuthenticated, customer);
app.use("/admin", isAuthenticated, account);
app.use("/", auth);

// CLIENT
app.use("/", homeClient);
app.use("/", productClient);
app.use("/", payClient);
app.use("/", cartClient);
app.use("/", productInformationClient);
app.use("/", accountClient);

// SETUP PUGJS
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'));


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
