function* gerar123(){

    yield 'valor 1';
    yield 'valor 2';
    yield 'valor 3';
}

function* gerar456(){
    yield* gerar123();
    yield 'valor 4';
    yield 'valor 5';
    yield 'valor 6';
}

function* gerarTudo(){
    yield* gerar456();
}

const gerar1 = gerarTudo();

for(let valor of gerar1){
    console.log(valor)
}