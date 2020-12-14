const { creaPersona, modificaNome, stampaPersona } = require('./persona-manager.js');

// persona.js
//          Creazione di una classe Persona
//          Funzione per inserire una nuova persona
//          Funzione per modificare la persona
//          Funzione di stampa a video per Persona

// main.js
//          Chiamata a Persona
//          Creazione di Persona
//          Modifica di Persona
//          Visualizzare la Persona a video

// gestoreFile.js
//          Creare un file JSON con l'oggetto passato in argomento
//          Leggere i parametri dell'oggetto
//          Aggiungere dei dati all'interno dell'oggetto
//          Stampare a video i contenuti del file

creaPersona('mario', 'rossi')
    .then(() => stampaPersona())
    .then(() => modificaNome('Paolo'))
    .then(() => stampaPersona());