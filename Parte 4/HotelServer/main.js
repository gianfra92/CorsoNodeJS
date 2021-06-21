const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongooseLoader = require('./loaders/mongoose.loader');
const jwtControl = require('./middlewares/jwt.middleware.js');
const authRouter = require('./routes/auth.router.js');
const adminRouter = require('./routes/admin.router.js');
const reservationRouter = require('./routes/reservation.router.js');
const {errors} = require('celebrate');
const PORT = 3000;
const server = express();

server.use(cors());
server.use(bodyParser);

server.use('/auth',authRouter);
server.use('/admin',jwtControl('admin'),adminRouter);
server.use('/reservation',jwtControl('user'),reservationRouter);
server.use(errors());

Promise.all([
    mongooseLoader()
])
.then(()=>{
    server.listen(PORT,()=>{
        console.log(`Listening on port: ${PORT}`);
    })
}).catch((error)=>{
    console.log(error);
    process.exit(1);
})