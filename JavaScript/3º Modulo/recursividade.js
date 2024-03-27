function recursiva(valor){
    if(valor >= 10) return;
    valor++;
    console.log(valor)
    recursiva(valor)
}

recursiva(0);