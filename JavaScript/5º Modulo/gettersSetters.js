class Carro{
    constructor(nome){
        this.nome = nome;
        this.velocidade = 0;
    }

    acelerar(){
        if(this.velocidade >= 100){
            return;
        }
        this.velocidade++;
    }

    freiar(){
        if(this.velocidade <= 100){
            return;
        }
        this.velocidade--;
    }
}