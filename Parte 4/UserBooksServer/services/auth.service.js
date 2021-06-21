const User = require('../models/User.js');
const jwt = require('jsonwebtoken');
const { jwtKey } = require('../config/keys.js');
const randToken = require('rand-token');
const Access = require('../models/Access.js');
const bcrypt = require('bcrypt');

const registerUser = async (firstname, lastname, username, password) => {
    password = await bcrypt.hash(password,10);
    const newUser = new User({
        firstname,
        lastname,
        username,
        password
    });
    return await newUser.save();
}

const login = async (username, password) => {
    const userFound = await User.findOne({ username }).exec();
    if (!userFound)
        throw { message: 'Invalid credentials', code: 401 };
    const passwordVerified = await bcrypt.compare(password,userFound.password);
    if (!passwordVerified)
        throw { message: 'Invalid credentials', code: 401 };
    const access_token = jwt.sign({ id: userFound._id, scopes: 'user' },jwtKey,{expiresIn: '1h'});
    const refreshToken = randToken.uid(256);
    const newAccess = new Access({refreshToken,userId:userFound._id});
    await newAccess.save();
    return {access_token, scopes: 'user', expiresIn: '1h', refresh_token:refreshToken};
}

const generateNewToken = async (refreshToken, oldToken) =>{
    const {id, scopes} = jwt.decode(oldToken);
    const accessFound = await Access.findOne({refreshToken, userId:id}).exec();
    if (!accessFound)
        throw {message: 'Refresh token not valid', code: 401};
    const access_token = jwt.sign({ id, scopes },jwtKey,{expiresIn: '1h'});
    return access_token;
}

const logout = async (refreshToken, userid) => {
    const accessFound = await Access.deleteOne({refreshToken, userId}).exec();
    return accessFound;
}

module.exports = {
    registerUser,
    login,
    logout,
    generateNewToken
}