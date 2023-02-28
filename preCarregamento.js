let imagemEstrada;
let imagemJogador;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

let somAtropelado;
let somMarcouPonto;
let somTrilha;

function preload(){
  somAtropelado = loadSound("Audios/colidiu.mp3");
  somMarcouPonto = loadSound("Audios/pontos.wav");
  somTrilha = loadSound("Audios/trilha.mp3");
  
  imagemEstrada = loadImage("Imagens/estrada.png");
  imagemJogador = loadImage("Imagens/ator-1.png");
  imagemCarro1 = loadImage("Imagens/carro-1.png");
  imagemCarro2 = loadImage("Imagens/carro-2.png");
  imagemCarro3 = loadImage("Imagens/carro-3.png");
  
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
}