class Persona {
    constructor(nome,cognome){
        this.nome = nome;
        this.cognome = cognome;
    }

    stampaPersona(){
        console.log(`${this.nome} ${this.cognome}`)
    }
}

module.exports = Persona;