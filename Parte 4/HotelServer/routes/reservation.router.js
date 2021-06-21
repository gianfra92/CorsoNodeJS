const router = require('express').Router();
const validator = require('../middlewares/inputValidator.middleware.js');
const { addReservation, cancelReservation, changeReservation, getFreeRoomsList } = require('../services/reservation.service.js');

router.get('/freeRooms', validator('freeRooms'),async (req, res) => {
    const {reservationDate, nGuests} = req.query;
    try {
        const freeRooms = await getFreeRoomsList(reservationDate,nGuests);
        res.json(freeRooms);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
})

router.post('/', validator('addReservation'),async (req, res) => {
    const {roomId,nGuests,reservationDate} = req.body;
    const id = req.id;
    try {
        const newReservation = await addReservation(roomId,id,nGuests,reservationDate);
        res.json(newReservation);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
})

router.put('/', validator('changeReservation'),async (req, res) => {
    const {reservationId,roomId,nGuests,reservationDate} = req.body;
    try {
        const modifiedReservation = await changeReservation(reservationId, roomId,nGuests,reservationDate);
        res.json(modifiedReservation);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
})

router.delete('/', validator('cancelReservation'),async (req, res) => {
    const {reservationId} = req.query;
    try {
        const deletedReservation = await cancelReservation(reservationId);
        res.json(deletedReservation);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
})

module.exports = router;