document.addEventListener("DOMContentLoaded", (event) => {
  printaData();
});

function printaData() {
  const data = new Date();
  const diaSemana = nomeiaDia(data);
  const nomeMes = nomeiaMes(data);
  const card = document.querySelector(".card");
  const h1 = document.createElement("h1");

  h1.innerText = diaSemana + ", " + data.getDate() + " " + nomeMes + " de " + data.getFullYear();
  card.appendChild(h1);
}

function nomeiaDia(data) {
  let dia = data.getDay();

  switch (dia) {
    case 0:
      return "domingo";
    case 1:
      return "segunda-feira";
    case 2:
      return "terca-feira";
    case 3:
      return "quarta-feira";
    case 4:
      return "quinta-feira";
    case 5:
      return "sexta-feira";
    case 6:
      return "sabado";
    default:
      console.log("");
      break;
  }
}

function nomeiaMes(data) {
  let mes = data.getMonth();

  switch (mes) {
    case 0:
      return "Janeiro";
    case 1:
      return "Fevereiro";
    case 2:
      return "Março";
    case 3:
      return "Abril";
    case 4:
      return "Maio";
    case 5:
      return "Junho";
    case 6:
      return "Julho";
    case 7:
      return "Agosto";
    case 8:
      return "setembro";
    case 9:
      return "Outubro";
    case 10:
      return "Novembro";
    case 11:
      return "Dezembro";
    default:
      console.log("");
      break;
  }
}
