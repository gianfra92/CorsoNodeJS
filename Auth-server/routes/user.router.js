const router = require('express').Router();
const { getUserList,addUser } = require('../services/user.service.js');

router.get('/list', async (req, res) => {
    try {
        const userList = await getUserList();
        res.json(userList);
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message);
    }
})

router.post('/', async (req, res) => {
    const {name,username,password} = req.body;
    const id = req.id
    try {
        const newUser = await addUser(name,username,password);
        res.json(newUser);
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message);
    }
})


module.exports = router;