const User = require('../models/User.js');

const registerUser = async (firstname,lastname,username,password) => {
    const newUser = new User({
        firstname,
        lastname,
        username,
        password
    });
    return await newUser.save();
}

module.exports = {
    registerUser
}