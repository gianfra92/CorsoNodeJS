const mongoose = require('mongoose');
const { DBConnectionUrl } = require('../config/keys');

module.exports = async () => {
    await mongoose.connect(DBConnectionUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    return mongoose.connection.db;
}
