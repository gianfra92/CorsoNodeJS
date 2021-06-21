const mongoose = require('mongoose');

const AccessSchema = new mongoose.Schema({
    refreshToken: String,
    userId: String
});

const Access = mongoose.model('Reservation',AccessSchema);

module.exports = Access;