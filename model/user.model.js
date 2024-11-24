const mongoose = require('mongoose');
const { models } = require("mongoose");

const userSchema = new mongoose.Schema({
    id: Number,
    firstName: String,
    lastName: String,
    maidenName: String,
    age: Number,
    gender: String,
    email: String,
    phone: String,
    username: String,
    password: String,
    birthDate: Date,
    image: String,
    country: String,
    role: String
});

const User = mongoose.model('User', userSchema, 'user');
module.exports = User;
