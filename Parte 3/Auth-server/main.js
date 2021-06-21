const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const {basicAuthMiddleware} = require('./middlewares/basicAuth.middleware.js');
const userRouter = require('./routes/user.router.js');
const cors = require('cors');
const PORT = 3000;

//Loaders
const mongooseLoader = require('./loaders/mongoose.loader.js');

//middlewares
server.use(bodyParser.json());
server.use(cors());

//Basic authentication
// server.use(basicAuthMiddleware);


/* Decommentare per testare la chiamata con autenticazione */
//percorso con controllo autenticazione
// server.use('/user',basicAuthMiddleware,userRouter);

//Chiamata senza controllo autenticazione
server.use('/user',userRouter);

Promise.all([
    mongooseLoader()
]).then(()=>{
    server.listen(PORT,()=>{
        console.log(`Listening on port ${PORT}`);
    })
}).catch(error=>{
    console.log(`Errore durante l'avvio: `, error);
})
