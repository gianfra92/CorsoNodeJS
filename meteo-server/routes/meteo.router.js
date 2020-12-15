const router = require('express').Router();
const { getMeteo } = require('../services/meteo.service.js');

router.get('/', async (req, res) => {
    const { city } = req.query;
    try {
        const data = await getMeteo(city);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(error.code).send(error.message);
    }
})


module.exports = router;