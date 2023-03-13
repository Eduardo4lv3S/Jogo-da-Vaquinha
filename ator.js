//codigo do ator

let xAtor = 85;
let yAtor = 366;

let colisao = false;
let meusPontos = 0;

let movimento = true;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if(movimento){
    if (keyIsDown(UP_ARROW)) {
      yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
      if (podeSeMover()) {
        yAtor += 3;
      }
    }
    if (keyIsDown(LEFT_ARROW) && xAtor > 0){
      xAtor -= 3;
    }
    if (keyIsDown(RIGHT_ARROW) && xAtor < 470){
      xAtor += 3;
    }
  }
  paraMovimento();
}


function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    // collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)

    colisao = collideRectCircle(xCarros[i],yCarros[i],comprimentoCarro,alturaCarro,xAtor,yAtor,15);
    if (colisao) {
      voltaAtorParaPosicaoInicial();
      sonDaColisao.play()
      if (PontosMaiorQueZero()){
      meusPontos -= 1;    
      }
    }
  }
}

function voltaAtorParaPosicaoInicial() {
  yAtor = 366;
  xAtor = 85;
  
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    sonDoPonto.play()
    voltaAtorParaPosicaoInicial();
    movimento = false;
  }
}


function PontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}

function paraMovimento(){
  if (keyIsPressed === false) {
    movimento = true;
  }
}





