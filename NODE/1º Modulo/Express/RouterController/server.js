const express = require('express');
const app = express();

app.use(express.urlencoded({extendend: true}))

app.get('/', (requisicao, resposta) => {
    resposta.send(`<form action="/" method="POST">Nome do cliente: <input type="text" name="nome">
                    <button>Olá mundo</button>
                    </form>
                `);
});

app.post('/', (requisicao,resposta) => {
    console.log(requisicao.body)
    resposta.send('recebi o formulario')
})

app.get('/teste/:id?', (requisicao, resposta) => {
    resposta.send(requisicao.params.id);

});
app.listen(3000, () => {
    console.log('http://localhost:3000/');
    console.log('http://localhost:3000/teste');
    console.log('online na porta 3000')
});

