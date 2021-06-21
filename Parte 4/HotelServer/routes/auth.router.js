const router = require('express').Router();
const {generateNewToken,login,logout,registerUser} = require('../services/auth.service.js');
const validator = require('../middlewares/inputValidator.middleware.js');

router.post('/login',validator('login'),async (req,res)=>{
    const {username,password} = req.query;
    try {
        const tokenData = await login(username,password);
        res.json(tokenData);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
})

router.post('/logout',validator('logout'),async (req,res)=>{
    const {refreshToken} = req.body;
    const id = req.id;
    try {
        const deletedToken = await logout(refreshToken,id);
        res.json(deletedToken);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
})

router.post('/register',validator('register'),async (req,res)=>{
    const {firstname,lastname,username,password,role} = req.body;
    try {
        const newUser = await registerUser(firstname,lastname,username,password,role);
        res.json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
})

router.post('/token',validator('token'),async (req,res)=>{
    const {refreshToken} = req.body;
    const {authorization} = req.headers;
    try {
        const newToken = await generateNewToken(refreshToken,authorization.split(' ')[1]);
        res.json(newToken);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
})

module.exports = router;