// //Filter
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosFiltrados = numeros.filter((valor) => {
    if(valor % 2 == 0){
        return valor;
    }
});
console.log(numerosFiltrados)

// MAP
const dobroDosNumeros = numerosFiltrados.map( (valor) => {
    return valor * 2;
});
console.log(dobroDosNumeros)

//Reduce1

const numerosSomados = dobroDosNumeros.reduce(function(acumulador, valor){
    return acumulador += valor;
}, 0);
console.log(numerosSomados);
