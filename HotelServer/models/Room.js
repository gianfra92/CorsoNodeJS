const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    minGuests: Number,
    maxGuests: Number,
    roomType: {
        type: String,
        enum: ['Suite','Junior','Business']
    }
});

const Room = mongoose.model('Room',RoomSchema);

module.exports = Room;