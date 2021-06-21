const router = require('express').Router();
const {getFreeRoomsList,getReservationList,getReservedRoomsList} = require('../services/admin.service.js');

router.get('/reservationList',async (req,res)=>{
    try {
        const reservationsList = await getReservationList();
        res.json(reservationsList);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
})

router.get('/rooms',(req,res)=>{
    const {reserved} = req.query;
    try {
        const roomsList = reserved =='true'? await getReservationList():
                                            await getFreeRoomsList();
        res.json(roomsList)
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
})

module.exports = router;