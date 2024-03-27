const n1 = parseInt(prompt('Digite o primeiro valor: '));
const n2 = parseInt(prompt('Digite o segundo valor: '));

if(n1 > n2){
    alert('O maior valor é o primeiro');

}else if(n2 > n1){
    alert('O maior valor é o segundo');

}else{
    alert('Os valores são iguais!');
}