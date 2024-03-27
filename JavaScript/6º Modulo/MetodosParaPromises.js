function tempoAleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function aguarda(texto, tempo){
    return new Promise((resolve, reject) => {
        if(typeof texto !== 'string'){
        reject(false);
        return;
        }

        setTimeout(()=>{
            resolve(texto.toUpperCase() + ' - Passei pela Promise');
        }, tempo);
    });
}

const minhasPromises1 = [
    'inicio',
    aguarda('primeira', 500),
    aguarda('segunda', 1000),
    aguarda('1000', 2000),
    'fim'
]; 

const minhasPromises2 = [
    aguarda('primeira', 500),
    aguarda('segunda', 1000),
    aguarda('1000', 2000),
];

function baixaPagina(){
    const cache = false;

    if(cache){
        return Promise.resolve('página em cache')
    }
    return aguarda('baixei a página', 1000)
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log(e))

Promise.all(minhasPromises1)
    .then(valor => {
        console.log(valor)
    })
    .catch(err => {
        console.log('deu erro...')
    });

Promise.race(minhasPromises2)
    .then(valor => {
        console.log(valor)
    })
    .catch(err => {
        console.log('deu erro...')
    });

