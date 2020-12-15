const express = require('express');
const bodyParser = require('body-parser');
const homeRouter = require('./routes/home.router.js');
const authRouter = require('./routes/auth.router.js');
const jwtControl = require('./middlewares/jwt-verify.js')
const server = express();
const cors = require('cors');
const PORT = 3000;

server.use(cors());
server.use(bodyParser.json());

server.use('/auth', authRouter);

//Accesso solo agli utenti con permesso user
server.use('/home', jwtControl('user'), homeRouter);

server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})