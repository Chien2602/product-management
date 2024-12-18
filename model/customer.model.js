const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = mongoose.Schema({
    cusID: String,
    Username: String,
    Password: String,
    Email: String,
    FullName: String,
    phoneNumber: String,
    Ward: String,
    District: String,
    City: String,
    Date: String,
});

const Customer = mongoose.model('Customer', customerSchema, 'customer');
module.exports = Customer;