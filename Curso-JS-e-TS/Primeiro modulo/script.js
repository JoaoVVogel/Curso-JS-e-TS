function meuForm(){
    const form = document.querySelector('.formulario')

    const pessoas = [];

    function eventoForm(evento){
        evento.preventDefault();
        const divResultado = document.querySelector('.resultado');
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value
        });

        const exibeNome = document.createElement('p');
        exibeNome.innerText = nome.value + " " + sobrenome.value;

        const exibeIdade = document.createElement('p');
        exibeIdade.innerText = idade.value;

        divResultado.appendChild(exibeNome);
        divResultado.appendChild(exibeIdade);
        
    }

    form.addEventListener('submit', eventoForm);
}

meuForm()