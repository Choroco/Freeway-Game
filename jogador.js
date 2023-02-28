// Variaveis do jogador
let xJogador = 100;
let yJogador = 368;
let escalaXJogador = 30;
let escalaYJogador = 30;

let velocidadeJogador = 2;

let verificaColisaoCarro = false;

function mostrarJogador(){
  image(imagemJogador, xJogador, yJogador, escalaXJogador, escalaYJogador);
}

function controleJogador(){
  if (keyIsDown(UP_ARROW) && yJogador > 0){
    yJogador -= velocidadeJogador;
  }
  if (keyIsDown(DOWN_ARROW) && yJogador + escalaYJogador < height ){
    yJogador += velocidadeJogador;
  }
}

function colisaoCarro(){
  
  for (let i = 0; i < imagemCarros.length; i++){
    verificaColisaoCarro = collideRectRect(xJogador, yJogador, escalaXJogador, escalaYJogador, xCarros[i], yCarros[i], escalaXCarro, escalaYCarro);

    if (verificaColisaoCarro){
      posicaoInicial();
      perderPonto()
      somAtropelado.play(); 
    }
  }
}

function retornoAtravessou(){
  if (yJogador < 5){
    posicaoInicial();
    marcaPonto()
    somMarcouPonto.play();
  }
}


function posicaoInicial(){
  yJogador = 368;
}


// Colisao sem livraria
function foiDeF(){
  for (let i = 0; i < imagemCarros.length; i++)
    if (xCarros[i] < xJogador + escalaXJogador && yCarros[i] + escalaYCarro > yJogador && yCarros[i] < yJogador + escalaYJogador && xCarros[i] + escalaXCarro > xJogador){
      yJogador = 368;
      somAtropelado.play();
  }
}