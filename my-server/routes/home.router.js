const router = require('express').Router();

router.get('/',(req,res)=>{
    res.send('Sei entrato nella risorsa');
})

module.exports = router;