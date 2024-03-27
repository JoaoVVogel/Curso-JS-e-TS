// const cpf = [ 1, 2, 5, 5, 7, 8, 1, 2, 9, 7, 8 ];
// let total = 0;
// function recursiva(valor1, valor2){
//     if(valor1 < 2) return total;
//     total = total + ((cpf[valor2]) * valor1);
//     valor1--;
//     valor2++;
//     recursiva(valor1, valor2)
// }

// recursiva(10, 0);
// var result = 11 - (total % 11)

// if(result == cpf[9]){
//     total = 0;
//     recursiva(11, 0)
//     result = 11 - (total % 11);
//     if(result == cpf[10]){
//         console.log('cpf válido')
//     }
// }

function validaCpf(cpfRecebido){
    Object.defineProperty(this, 'cpfLimpo',{
        enumerable: true,
        get: function(){
            return cpfRecebido.replace(/\D+/g, '');
        }
    });
}

validaCpf.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined'){
        return false;
    }
    if(this.cpfLimpo.length != 11){
        return false;
    }

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    const novoCpf = cpfParcial + digito1 + digito2;
    if(novoCpf == cpf){
        return false;
    }

    return true;
}

validaCpf.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((acumulador, valor) => {
        acumulador += (regressivo * Number(valor));
        regressivo--;
        return acumulador;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito)
}

const cpf = new validaCpf('125.578.129-78')
console.log(cpf.valida())
