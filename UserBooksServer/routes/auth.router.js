const router = require('express').Router();
const { registerUser, login, generateNewToken, logout } = require('../services/auth.service.js');

router.post('/', async (req, res) => {
    const { firstname, lastname, username, password } = req.body;
    try {
        const newUser = await registerUser(firstname, lastname, username, password);
        res.json(newUser);
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message);
    }
});

router.post('/login', async (req, res) => {
    const {username, password} = req.body;
    try {
        const accessToken = await login(username,password);
        res.json(accessToken);
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message);
    }
})

router.post('/token', async (req,res)=>{
    const {refreshToken} = req.body;
    const oldToken =req.headers.authorization.split(' ')[1];
    try {
        const accessToken = await generateNewToken(refreshToken,oldToken);
        res.json({accessToken});
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message);
    }
})

router.post('/logout', async (req,res)=>{
    const id = req.id;
    const {refreshToken} = req.body;
    try {
        const logoutDone = await logout(refreshToken,id);
        res.json(logoutDone);
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message);
    }
})

module.exports = router