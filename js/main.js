const robotron = document.querySelector('#robotron');
//const controle = document.querySelectorAll('.controle-ajuste')
const controle = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatistica]')

//no console podemos acessar a variavel pecas e seus subniveis
//pecas.braco.energia
//pecas["braco"]
//pecas["braco"].energia
const pecas = {
    "braco": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    },
}


//BRAÇO
//const braco = document.querySelector('#braco')
//const somar = document.querySelector('#somar')
//const subtrair = document.querySelector('#subtrair')


//console.log(controle)

//const botaoIniciarProducao = document.querySelector('#producao');

//console.log('aqui');
//document.querySelector('#robotron').addEventListener("click", ola);

/*
function ola(){
    console.log("oi");
}
*/
//ola();
//robotron.addEventListener("click",ola);

/*
robotron.addEventListener("click", function() {
    console.log('Cliquei no robo')
})
*/

//usar () => é o mesmo que declarar uma função anonima
/*robotron.addEventListener("click", (evento) => {
    console.log('Cliquei no robo');
    console.log(evento)
});*/

/*
somar.addEventListener("click", (evento) => {
    //console.log(braco)
    //braco.value += 1; - nao vai rolar pq vai tratar como string. tenho que transf. p/ numero usando parseInt
    braco.value = parseInt(braco.value) + 1
})

subtrair.addEventListener("click", (evento) => {
    braco.value = parseInt(braco.value) - 1
})
*/

//Refatoramos as duas funções acima e fazemos a chamada passando o parâmetro
//somar.addEventListener("click", () => { manipulaDados("somar")})
//subtrair.addEventListener("click", () => { manipulaDados("subtrair")})

controle.forEach( (elemento) => {
    //console.log(elemento)
    elemento.addEventListener("click", (evento) => {
        //console.log(evento.target)
        //console.log(evento.target.parentNode)
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")
    //console.log(peca)
    //if(operacao === "subtrair" && (braco.value !== "00" || braco.value !== "0")){
    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca) {
    //console.log(pecas[peca])
    estatisticas.forEach( (elemento) => {
        //console.log(elemento.textContent)
        //console.log(elemento.dataset.estatistica)
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica] 
    })
}

