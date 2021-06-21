const router = require('express').Router();
const {login} = require('../services/auth.service.js');

router.post('/login', async (req,res)=>{
    const {username,password} = req.body;
    try {
        const token = login(username,password)
        res.json(token);
    } catch (error) {
        console.log(error)
        res.send(error.message);
    }
})

module.exports = router;