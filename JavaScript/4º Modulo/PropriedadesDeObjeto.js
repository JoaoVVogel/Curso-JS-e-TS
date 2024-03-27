//Define Proprety - Define Propretis
function Produto(nome, valor, quantidade, codigo){

    Object.defineProperties(this, {
        nome: {
            enumerable: true, //mostra chave true
            value: nome, //valor
            writable: true, //pode ser alterado true
            configurable: true //configuravel true
        },
        valor: {
            enumerable: true, //mostra chave true
            value: valor, //valor
            writable: true, //pode ser alterado true
            configurable: true //configuravel true
        },
        quantidade: {
            enumerable: true, //mostra chave true
            value: quantidade, //valor
            writable: true, //pode ser alterado true
            configurable: true //configuravel true
        },

    });

    Object.defineProperty(this, 'codigo', {
        enumerable: true, //mostra chave true
        value: codigo, //valor
        writable: true, //pode ser alterado true
        configurable: true //configuravel true
    });
}

const mesa = new Produto("mesa", 500, 20, 22334);
console.log(mesa)