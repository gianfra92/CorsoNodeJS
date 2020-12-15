//  Creare un server con moduli di routing, services
//  Chiamata con axios verso https://openweathermap.org/
//  Ricerca di meteo per città
//  Salvataggio delle città cercate
//  Consultazione (getList) ed eliminazione(deleteCity) tramite ID (cityID) delle città salvate
//  /meteo  gestione ricerca del meteo  
//  /city   gestione delle città salvate
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const server = express();
const PORT = 3000;

const meteoRoute = require('./routes/meteo.router.js');
const cityRoute = require('./routes/city.router.js')

server.use(bodyParser.json());
server.use(cors());

server.use('/meteo',meteoRoute);
server.use('/city',cityRoute);

server.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})