const User = require("../models/User.js")

const getUserByID = async (id) => {
    const userFound = await User.findById(id).exec();
    if (!userFound)
        throw {message: 'User not found', code: 404};
    return userFound;
}

const getUserList = async () => {
    const userList = await User.find().exec();
    return userList;
}

module.exports = {
    getUserByID,
    getUserList
}