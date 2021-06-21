const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    roomId: String,
    userId: String,
    nGuests: Number,
    date: Date
});

const Reservation = mongoose.model('Reservation',ReservationSchema);

module.exports = Reservation;