const mongoose = require('mongoose');

const AccessSchema = new mongoose.Schema({
    userId: String,
    refreshToken: String
});

const Access = mongoose.model('Access',AccessSchema);

module.exports = Access;