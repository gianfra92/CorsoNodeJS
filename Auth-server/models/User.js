const mongoose = require('mongoose');
const ObjectID = mongoose.Schema.ObjectID;

const UserSchema = new mongoose.Schema({
    // id: ObjectID,
    name: String,
    username: String,
    password: String
});

const User = mongoose.model('User',UserSchema);

module.exports = User;