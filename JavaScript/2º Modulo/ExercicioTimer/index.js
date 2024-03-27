const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
const timer = document.querySelector('.timer');


let intervaloId;
let segundos = 0;

function criaHora(segundos){
    timer.style.color = "black";
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    })
}

function iniciaTimer(){
    intervaloId = setInterval(function(){
        segundos++;
        timer.innerHTML = criaHora(segundos);
    }, 1000);
}

function pausaTimer(){
    timer.style.color = "red";
    setTimeout(function(){
        clearInterval(intervaloId);
    }, 0);
}

function zeraTimer(){
    segundos = 0;
    timer.innerHTML = criaHora(segundos);
}

iniciar.addEventListener('click', function(event){
    iniciaTimer();
});


pausar.addEventListener('click', function(event){
    pausaTimer();
})

zerar.addEventListener('click', function(event){
    zeraTimer();
})
