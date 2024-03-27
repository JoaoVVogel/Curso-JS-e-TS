function tempoAleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function aguarda(texto, tempo){
    return new Promise((resolve, reject) => {
        if(typeof texto !== 'string'){
        reject('deu ruim');
        }
        setTimeout(()=>{
            resolve(texto.toUpperCase() + ' - Passei pela Promise');
        }, tempo);
    });
}

// aguarda('Fase1', tempoAleatorio(1, 3))
//     .then(valor => {
//         console.log(valor)
//     })
//     .catch(e => console.log('erro...'))


async function executaFases(){
    try{
        const fase1 = await aguarda('Fase1', tempoAleatorio(1, 3));
        console.log(fase1)
        const fase2 = await aguarda(1000, tempoAleatorio(1, 3));
        console.log(fase2)
        const fase3 = await aguarda('Fase3', tempoAleatorio(1, 3));
        console.log(fase3)
    }catch(e){
        console.log(e)
    }
}
executaFases()
