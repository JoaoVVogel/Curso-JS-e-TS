const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const le = require('./modules/ler');

const naty = [
    {nome: 'joao'},
    {nome: 'igor'},
    {nome: 'gustavo'},
    {nome: 'giuseppe'}
];

const natyJSON = JSON.stringify(naty, '', 2);

escreve(caminhoArquivo, natyJSON);
le(caminhoArquivo);