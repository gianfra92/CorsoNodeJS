const User = require('../models/User.js');

const loginCheck = async (username,password) => {
    const userFound = await User.findOne({
        username,
        password
    }).exec();
    return userFound;
}

module.exports = {
    loginCheck
}