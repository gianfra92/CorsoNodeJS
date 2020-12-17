const Reservation = require('../models/Reservation.js');
const Room = require('../models/Room.js');

const getFreeRoomsList = async (reservationDate,nGuests) => {
    const totalRooms = await Room.find({
        minGuests:{
            $gte: nGuests
        },
        maxGuests:{
            $lte: nGuests
        }
    }).exec();
    const dayReservations = await Reservation.find({
        date: {
            $eq: reservationDate
        }
    }).exec();
    const freeRooms = totalRooms.filter(room => dayReservations.map(res => res._id).includes(room._id));
    return freeRooms;
}

const addReservation = async (roomId, userId, nGuests, reservationDate) => {
    const newReservation = new Reservation({roomId, userId, nGuests, date:reservationDate});
    return newReservation.save();
}

const changeReservation = async (reservationId,roomId, nGuests, reservationDate) => {
    const reservationFound = await Reservation.findById(reservationId);
    if (!reservationFound)
        throw {message: 'Reservation not found', code: 404};
    reservationFound.roomId = roomId;
    reservationFound.nGuests = nGuests;
    reservationFound.reservationDate = reservationDate;
    return await reservationFound.save();
}

const cancelReservation = async (reservationId) => {
    const deletedReservation = await Reservation.deleteOne({_id:reservationId});
    return deletedReservation;
}

module.exports = {
    addReservation,
    cancelReservation,
    changeReservation,
    getFreeRoomsList
}