const User = require('../models/User.js');

const getUserList = async ()=>{
    const users = await User.find().exec();
    return users
}

const addUser = async (name,username,password) => {
    const newUser = new User({name,username,password});
    return await newUser.save();
}

module.exports = {
    getUserList,
    addUser
}