class Persona {
    
    constructor(nome,cognome){
        this.nome = nome;
        this.cognome = cognome
    }

    stampaNome(){
        console.log(this.nome)
    }

    get nomeCompleto(){
        return `${this.nome} ${this.cognome}`;
    }

    set nomeCompleto(value){
        const [nome,cognome] = value.split(' ');
        this.nome = nome;
        this.cognome = cognome;
    }
}

const persona = new Persona('Paolo','Rossi');
// persona.stampaNome();
persona.nomeCompleto = 'Pietro Rossi'
console.log(persona.nomeCompleto);
persona.stampaNome();