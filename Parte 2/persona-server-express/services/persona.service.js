const Persona = require('../models/Persona.js');

const personaList = [];

const getPersonaList = ()=> {
    return personaList;
}

const newPersona = (nome,cognome) => {
    const newPersona = new Persona(nome,cognome);
    personaList.push(newPersona);
}

const getLastPersona = () => {
    if (personaList.length===0)
        return {};
    else
        return personaList[personaList.length-1];
}

module.exports = {
    getPersonaList,
    newPersona,
    getLastPersona
}