const { route } = require('./meteo.router');

const router = require('express').Router();
const {deleteCity,getList} = require('../services/city.service.js');

router.get('/list',(req,res)=>{
    try {
        const cityList = getList();
        res.json(cityList);
    } catch (error) {
        console.log(error);
        res.status(error.code).send(error.message);
    }
})

router.delete('/',(req,res)=>{
    const {id} = req.query;
    try {
        const deleted = deleteCity(+id);
        res.json(deleted);
    } catch (error) {
        console.log(error);
        res.status(error.code).send(error.message);
    }
})


module.exports = router;