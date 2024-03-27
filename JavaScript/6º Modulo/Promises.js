function tempoAleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function aguarda(texto, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(texto);
        }, tempo);
    });
}

aguarda('frase 1', tempoAleatorio(1, 3))
    .then(resposta => {
        console.log(resposta);
        return aguarda('frase 2', tempoAleatorio(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
        return aguarda('frase 3', tempoAleatorio(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
    })
