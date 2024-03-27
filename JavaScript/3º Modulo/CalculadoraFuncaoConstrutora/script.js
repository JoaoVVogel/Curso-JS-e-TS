function criarCalculadora(){
    this.display = document.querySelector(".display");
    this.inicia = () =>{
        this.cd botoes();
        this.limpaDisplay(this.display);
    };

    this.botoes = () =>{
        document.addEventListener('click', evento =>{
            const listaElementos = evento.target;

                if(listaElementos.classList.contains("btn-num")){
                    this.passaProDisplay(listaElementos.innerText, this.display);
                }

                if(listaElementos.classList.contains("btn-clear")){
                    this.limpaDisplay(this.display);
                }

                if(listaElementos.classList.contains("btn-del")){
                    this.apagaUltimo(this.display);
                }

                if(listaElementos.classList.contains("btn-eq")){
                    this.calculaResultado(this.display);
                }
        });
    };

    this.passaProDisplay = () =>{
        display.value += valor; 
    };

    this.limpaDisplay = () =>{
        display.value = "";
    };

    this.apagaUltimo = () =>{
        display.value = display.value.slice(0, -1);
    };

    this.calculaResultado = () =>{
        let conta = display.value;

            try {
                conta = eval(conta);
                if(!conta){
                    alert("Conta inválida!!!");
                    return;
                }
                    display.value = conta
            } catch (err) {
                alert("Conta inválida!!!");
                return;
            }
    };
}

const calculadora = new criarCalculadora();
calculadora.inicia();