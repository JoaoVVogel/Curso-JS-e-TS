const express = require('express');
const app = express();

app.get('/', (requisicao, resposta) => {
    resposta.send('Hello World');

});
app.get('/teste', (requisicao, resposta) => {
    resposta.send('Pagina 2');

});
app.listen(3000, () => {
    console.log('http://localhost:3000/');
    console.log('http://localhost:3000/teste');
    console.log('online na porta 3000')
});

