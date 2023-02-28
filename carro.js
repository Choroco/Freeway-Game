
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 98, 150, 210, 264, 318];

let velocidadeCarros = [2, 3.5, 3, 1.5, 4, 2];

let escalaXCarro = 50;
let escalaYCarro = 40;


function mostrarCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], escalaXCarro, escalaYCarro);
  }
}

function movimentarCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function retornaCarro(){
  for (let i = 0; i < imagemCarros.length; i++)
    if (verificaCarroForaTela(xCarros[i])){
      xCarros[i] = width + escalaXCarro;
    }
}

function verificaCarroForaTela(xCarro){
  return xCarro + escalaXCarro < 0
}

