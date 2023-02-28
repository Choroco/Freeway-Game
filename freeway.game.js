
function setup() {
  createCanvas(500, 400);
  somTrilha.loop()
}

function draw() {
  background(imagemEstrada);
  mostrarJogador();
  controleJogador();
  mostrarCarro();
  movimentarCarro();
  retornaCarro();
  colisaoCarro();
  retornoAtravessou();
  placar();
}
