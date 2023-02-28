let pontuacao = 0;

function placar(){
  textAlign(CENTER);
  textSize(20);
  fill("white");
  text("SCORE: " + pontuacao, 430, 25);
}

function marcaPonto(){
  pontuacao +=1;
}

function perderPonto(){
  if (pontuacao >= 1){
    pontuacao -=1;
  }
}