// Define Propreties -> Get and Set
function meuObjeto(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    let idadePrivada = idade

    Object.defineProperty(this, 'idade', {
        enumerable: true,
        configurable: true,
        get: function(){
            return idadePrivada;
        },
        set: function(valor){
            if(idadePrivada != Number){
                console.log('A idade deve ser um numero!')
                return;
            }
            idadePrivada = valor;
        }
    });
}

function criaPessoa(nome){
    return {
        get nome(){
            return nome
        },
        set nome(input){
            input = input.replace(' ', '');
            nome = input;
        }
    };
}

const obj1 = new meuObjeto('joao vitor', 'vogel', 0);
obj1.idade = 'aiuygvfiuoaygfoiuyagf';
console.log(obj1)
console.log(obj1.idade)

const joao = criaPessoa('joao vitor')
console.log(joao.nome)