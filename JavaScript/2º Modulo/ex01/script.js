const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", function eventoFormulario(evento) {
  evento.preventDefault();
  const inputPeso = evento.target.querySelector(".peso");
  const inputAltura = evento.target.querySelector(".altura");
  var peso, altura;

  peso = Number(inputPeso.value);

  altura = Number(inputAltura.value);

  if (!peso) {
    alert("Peso invalido");
  }

  if (!altura) {
    alert("Altura invalida");
  }

  const imc = calcularIMC(peso, altura);
  const nivel = classificaNivel(imc);
  const msg = `Seu IMC é ${imc}, ${nivel}`;

  exibirMensagem(msg);
});

function calcularIMC(peso, altura) {
  var resultado;

  resultado = peso / altura ** 2;

  return resultado.toFixed(2);
}

function criarP() {
  const p = document.createElement("p");
  return p;
}

function classificaNivel(imc) {
  const nivel = [
    "você está abaixo do peso ideal",
    "você está no peso ideal",
    "você está acima do peso ideal",
    "você tem obesidade de grau 1",
    "você tem obesidade de grau 2",
    "procure um médico urgentemente!",
  ];

  if (18.5 > imc) {
    return nivel[0];
  } else if (imc > 18.5 && 24.9 > imc) {
    return nivel[1];
  } else if (imc > 25 && 29.9 > imc) {
    return nivel[2];
  } else if (imc > 30 && 34.9 > imc) {
    return nivel[3];
  } else if (imc > 30 && 39.9 > imc) {
    return nivel[4];
  } else if (imc > 40) {
    return nivel[5];
  }
}

function exibirMensagem(msg) {
  const exibir = document.querySelector(".resultado");
  exibir.innerHTML = "";
  const p = criarP();
  p.innerText = msg;
  exibir.appendChild(p);
}
