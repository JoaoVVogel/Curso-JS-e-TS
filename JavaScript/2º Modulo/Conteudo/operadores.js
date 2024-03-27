//Ternario
const idade = prompt("Informe suda idade: ");
const eMenorDeIdade = idade <= 18 ? "Menor de idade" : "Maior de idade";
console.log(eMenorDeIdade);

//Date
const tresHoras = 60 * 60 * 3 * 1000;
//const data = new Date(); ano, mes, dia, hora, minuto, segundo, milesimo - Minimo 2 parametros
const data = new Date(0 + tresHoras); // 01/01/1970 epoca Unix no horario 00:00:00
console.log(data.toString());

const data2 = new Date('2020-04-04 16:30:00');
console.log('Dia da semana', data2.getDay()); // 0 - Domingo a 6 - Sabado
console.log('Dia', data2.getDate());
console.log('Mês', data2.getMonth()); //Mês começa do 0
console.log('Ano', data2.getFullYear());
console.log('Hora', data2.getHours());
console.log('Minuto', data2.getMinutes());
console.log('Segundo', data2.getSeconds());


