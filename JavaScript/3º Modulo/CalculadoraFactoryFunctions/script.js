function criarCalculadora(){
    return {
        display: document.querySelector(".display"),

        inicia(){
            this.botoes();
            this.limpaDisplay();
        },

        botoes(){
            document.addEventListener("click", evento => {
                const listaElementos = evento.target;

                if(listaElementos.classList.contains("btn-num")){
                    this.passaProDisplay(listaElementos.innerText);
                }

                if(listaElementos.classList.contains("btn-clear")){
                    this.limpaDisplay();
                }

                if(listaElementos.classList.contains("btn-del")){
                    this.apagaUltimo();
                }

                if(listaElementos.classList.contains("btn-eq")){
                    this.calculaResultado();
                }
            });
        },

        passaProDisplay(valor){
            this.display.value += valor; 
        },

        limpaDisplay(){
            this.display.value = "";
        },

        apagaUltimo(){
            this.display.value = this.display.value.slice(0, -1);
        },
        
        calculaResultado(){
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if(!conta){
                    alert("Conta inválida!!!");
                    return;
                }
                this.display.value = conta
            } catch (err) {
                alert("Conta inválida!!!");
                return;
            }
        }

    };
}

const calculadora = criarCalculadora();
calculadora.inicia();
