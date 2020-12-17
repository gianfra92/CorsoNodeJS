const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongooseLoader = require('./loader/mongoose.loader.js');
const authControl = require('./middlewares/basicAuth.middleware.js');
const jwtControl = require('./middlewares/jwt.middleware.js');
const userRoute = require('./routes/user.router.js');
const bookRoute = require('./routes/book.router.js');
const authRoute = require('./routes/auth.router.js');
const scheduleLoader = require('./loader/nodeSchedule.loader.js');
const {errors} = require('celebrate')
const PORT = 3000;
const server = express();

server.use(cors());
server.use(bodyParser.json());

server.use('/user',jwtControl('user'),userRoute);
server.use('/auth',authRoute);
server.use('/book',authControl,bookRoute);
server.use('/bookjwt',jwtControl('user'),bookRoute);
server.use(errors())

scheduleLoader
Promise.all([
    mongooseLoader(),

]).then(()=>{
    server.listen(PORT,()=>{
        console.log(`Listening on port: ${PORT}`);
    })
}).catch((error)=>{
    console.log(error);
    process.exit(1);
})
