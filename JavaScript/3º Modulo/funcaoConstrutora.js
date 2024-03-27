function Pessoa(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;

}

const pessoa1 = new Pessoa("joao vitor", "vogel", "18");
console.log(pessoa1)