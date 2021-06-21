// Ricreare il server Persona 
// installare express: npm install --save express
// installare body-parser: npm install --save body-parser
// Gestione per cartelle ( services, models )
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {getLastPersona,getPersonaList,newPersona} = require('./services/persona.service.js')
const PORT = 3000;

const server = express();
server.use(bodyParser.json());

server.get('/', (req,res)=>{
    try {
        const lastPersona = getLastPersona();
        res.json(lastPersona);
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
})

server.get('/lista', (req,res)=>{
    try {
        const personaList = getPersonaList();
        res.json(personaList);
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
})

server.post('/', (req,res)=>{
    const {nome,cognome} = req.body;
    console.log(nome,cognome)
    try {
        const personaInserita = newPersona(nome,cognome);
        res.end();
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
})

server.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})