const Reservation = require('../models/Reservation.js');
const Room = require('../models/Room.js');

const getReservationList = async () => {
    const reservationList = await Reservation.find().exec();
    return reservationList;
}

const getFreeRoomsList = async (reservationDate) => {
    const dayReservations = await Reservation.find({
        date: {
            $eq: new Date(reservationDate).toISOString()
        }
    }).exec();
    const freeRooms = await Room.find({
        _id: {
            $nin: dayReservations.map(res => res._id)
        }
    }).exec();
    return freeRooms;
}

const getReservedRoomsList = async (reservationDate) => {
    const dayReservations = await Reservation.find({
        date: {
            $eq: new Date(reservationDate).toISOString()
        }
    }).exec();
    const reservedRooms = await Reservation.find({
        _id: {
            $in: dayReservations.map(res => res._id)
        }
    }).exec();
    return reservedRooms;
}

module.exports = {
    getFreeRoomsList,
    getReservationList,
    getReservedRoomsList
}