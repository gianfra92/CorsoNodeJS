const mongoose = require('mongoose');
const { mongoDBURL } = require('../config/keys');

module.exports = async () => {
    const connection = await mongoose.connect(mongoDBURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    return connection.connection.db;
}