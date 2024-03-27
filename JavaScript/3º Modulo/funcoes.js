//Closure

const { parse } = require("path");

//nota: Closures são utilizadas para acessar o escopo externo de ume função
function minhaFuncao(variavel){
    return function(){
        return variavel;
    };
}
const teste1 = minhaFuncao('joao');
const teste2 = minhaFuncao('123');

console.dir(teste1);
console.dir(teste2);
console.log(teste1(), teste2());

//CallBack--------

function funcao1(callback){
    console.log('primeiro');
    if (callback) callback();
}

function funcao2(callback){
    console.log('segundo');
    if (callback) callback();
}

funcao1(function(){
    funcao2(function(){
        console.log('final...')
    });
});

//Função autoinvocada ou imediata

(function(){
    console.log('Eu não faço parte do escopo global...')
})();

//Factory function-------

function minhaFabrica(nome, sobrenome, idade, anoAtual){
    return {
        animal,
        sobrenome,
        som,
        i: idade,
        a: anoAtual,
        get dataNascimento(){
            let nascimento = this.a - this.i;
            return nascimento;

        }
    };
}

// function separaNome(nomeCompleto){
//     return {
//         nomeCompleto,
//         get nome(){
//             return nome;
//         },
        
//         set nome(valor){
//             valor = valor.split(" ");
//             console.log(valor)
//         }
//     };
// }

const f1 = minhaFabrica('vaca', 'marrom', 14, 2024);

console.log(f1.dataNascimento);