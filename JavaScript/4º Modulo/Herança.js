function Produto(nome, valor){
    this.nome = nome;
    this.valor = valor;
}

Produto.prototype.desconto = function(porcentagem){
    this.valor = this.valor * (porcentagem / 100);
}

function Camiseta(nome, valor, cor){
    Produto.call(this, nome, valor);
    this.cor = cor;
}

//Camiseta agora possui os mesmos prototypes de Produto
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta;

const camiseta1 = new Camiseta('Nike', 49.90, 'Azul')

console.log(camiseta1)