class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    }
};

const p1 = new Pessoa('joao vitor', 'vogel');
console.log(p1.nomeCompleto());