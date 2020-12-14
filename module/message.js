let messaggio = 'Il mio messaggio personale';

const stampaMessaggio = () => {
    console.log(messaggio);
}

const modificaMessaggio = (nuovoValore) =>{
    messaggio = nuovoValore;
}

module.exports = {
    stampaMessaggio,
    modificaMessaggio
};