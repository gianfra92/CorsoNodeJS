const router = require('express').Router();
const {registerUser} = require('../services/auth.service.js');

router.post('/',async(req,res)=>{
    const {firstname,lastname,username,password} = req.body;
    try {
        const newUser = await registerUser(firstname,lastname,username,password);
        res.json(newUser);
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message);
    }
})

module.exports = router