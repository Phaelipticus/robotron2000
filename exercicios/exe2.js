const lista = document.querySelector("ul");
//const botaoMostrar = document.querySelector
//console.log(lista)

function controlaTintas(botao){
    console.log(botao)
    if(botao.textContent === "Exibe tintas"){
        lista.hidden = false;
    } else {
        lista.hidden = true;
    }  

    
}

