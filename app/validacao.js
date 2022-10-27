function verificaSeOChutePossuiUmValorValido() {
    const numero = +chute;

    if(chuteForInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML = `
                <h2 class="titulo-secundario">Game Over!!!</h2>
                <h3 class="titulo-terciario">Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="button" >Jogar novamente</button>
                `
                document.body.style.backgroundColor = "black";
        } else {

            elementoChute.innerHTML += '<div>Valor inválido. Você sabe o que são números?</div>'
            return
        }
    } 
    
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Oh seu burro! <br> O número secreto está ente ${menorValor} e ${maiorValor}</div>`
        return
    } 
    
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2 class="titulo-secundario">Voce acertou!</h2>
        <h3 class="titulo-terciario"> O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="button">Jogar Novamente <i class="fa-solid fa-repeat"></i></button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else { elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }



}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', evento => {
    if(evento.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})
