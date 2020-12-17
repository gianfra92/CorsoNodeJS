const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    role: {
        type: String,
        enum: ['user','admin']
    }
});

const User = mongoose.model('Reservation',UserSchema);

module.exports = User;