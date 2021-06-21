const Persona = require('./Persona.js');
const { creaFile, modificaFile, leggiFile } = require('./fileManager.js');

const creaPersona = async (nome, cognome) => {
    const newPersona = new Persona(nome, cognome);
    try {
        await creaFile(newPersona);
        console.log('File creato con successo')
    } catch (error) {
        console.log(err)
    }
}

const modificaNome = async (nome) => {
    try {
        const personaFile = await leggiFile();
        personaFile.nome = nome;
        await modificaFile(personaFile);
        console.log('File modificato con successo');
    } catch (error) {
        console.log(error);
    }
}

const stampaPersona = async () => {
    try {
        const result = await leggiFile();
        console.log('Persona: ', result);
    } catch (error) {
        console.log('Non esiste Persona in memoria')
    }
}

module.exports = {
    creaPersona,
    modificaNome,
    stampaPersona

}