exports.paginaInicial = (requisicao, resposta) => {
    resposta.send(`<form action="/" method="POST">Nome do cliente: <input type="text" name="nome">
                    <button>Olá mundo</button>
                    </form>
                `);
}

exports.trataPost = (requisicao, resposta) => {
    resposta.send('post deu certo');
}