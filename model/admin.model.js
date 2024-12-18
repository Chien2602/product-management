const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = mongoose.Schema({
    adminID: String,
    admiName: String,
    passWord: String,
    Email: String,
    FullName: String,
    phoneNumber: String,
    Ward: String,
    District: String,
    City: String
});

const Admin = mongoose.model('Admin', adminSchema, 'admin');
module.exports = Admin;