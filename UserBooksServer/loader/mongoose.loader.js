const mongoose = require('mongoose');
const {mongoDBUrl} = require('../config/keys.js');

module.exports = async () => {
    await mongoose.connect(mongoDBUrl,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })

    return mongoose.connection.db;
}
