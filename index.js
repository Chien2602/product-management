const express = require("express");
const app = express();
const port = 3000;

const auth = require("./routes/auth.route");
const product = require("./routes/admin/product.route");
const home = require("./routes/admin/home.route");
const employee = require("./routes/admin/employee.route");
const statistical = require("./routes/admin/statistical.route");
const bill = require("./routes/admin/bill.route");
const customer = require("./routes/admin/customer.route");
const account = require("./routes/admin/account.route");
const mongoose = require("./connects/connectMongo")

mongoose.connect();

app.use("/", auth);
app.use("/admin", product);
app.use("/admin", home);
app.use("/admin", employee);
app.use("/admin", statistical);
app.use("/admin", bill);
app.use("/admin", customer);
app.use("/admin", account);

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
