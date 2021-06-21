const router = require('express').Router();
const {getUserByID,getUserList} = require('../services/user.service.js');

router.get('/', async (req,res)=>{
    const {id} = req.query;
    try {
        const userFound = await getUserByID(id);
        res.json(userFound)
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message);
    }
})

router.get('/list', async (req,res)=> {
    try {
        const userList = await getUserList();
        res.json(userList)
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message);
    }
})

module.exports = router;