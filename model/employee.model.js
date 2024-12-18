const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = mongoose.Schema({
    maNhanVien: String,
    hoTen: String,
    gioiTinh: String,
    ngaySinh: String,
    diaChi: String,
    sdt: String,
    email: String,
    luong: String,
});

const Employee = mongoose.model('Employee', employeeSchema, 'employee');
module.exports = Employee;