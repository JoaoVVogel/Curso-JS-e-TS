function criaPessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

criaPessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
}

const p1 = new criaPessoa("joao", "vogel");
console.log(p1.nomeCompleto)

const obj1 = {
    nome1: 'garrafa'
}

const obj2 = {
    nome1: 'mesa'
}

Object.setPrototypeOf(obj1, obj2);
