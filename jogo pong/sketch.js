// variaveis da bola
let xBALL = 300;
let yBALL = 200;
let dBALL = 20;
let RAIO = dBALL / 2;

// variaveis da velocidade
let vXBALL = 7;
let vYBALL = 7;

// variaveis da raquete
let xRAQUETE = 5;
let yRAQUETE = 150;
let lRAQUETE = 10;
let aRAQUETE = 90;

// variaveis da raquete2
let xRAQUETE2 = 585
let yRAQUETE2 = 150
let vyRAQUETE2;

// placar do jogo 
let PONTOS1 = 0;
let PONTOS2 = 0;


let COLIDIU = false;

// sons do jogo
let RAQUETADA;
let TRILHA;
let PONTO;

function preload(){
  RAQUETADA = loadSound("raquetada.mp3")
  TRILHA = loadSound("trilha.mp3")
  PONTO = loadSound("ponto.mp3")
  }

// cor de fundo
function setup() {
  createCanvas(600, 400);
  TRILHA.loop();
}

function draw() {
  background(0);
  MOSTRABALL();
  MOVEBALL();
  COLIDEBALL();
  MOSTRARAQUETE(xRAQUETE,yRAQUETE);
  MOVIRAQUETE();
  // COLISAORAQUETE();
  COLISAORAQUETEBOOK(xRAQUETE,yRAQUETE);
  MOSTRARAQUETE(xRAQUETE2,yRAQUETE2);
  MOVIMENTARAQUETE2();
  COLISAORAQUETEBOOK(xRAQUETE2,yRAQUETE2);
  PLACAR();
  MARCAPONTO();
  
  } 
 
function MOSTRABALL(){circle(xBALL,yBALL,dBALL)}
 
 function MOVEBALL(){ xBALL += vXBALL;
  yBALL += vYBALL;
  }

 function COLIDEBALL(){ if (xBALL + RAIO > width || xBALL- RAIO < 0){vXBALL *= -1;}
  if (yBALL + RAIO > height || yBALL - RAIO <0) {vYBALL *= -1;}}

 function MOSTRARAQUETE(x,y){ rect(x,y,lRAQUETE,aRAQUETE)}

 function MOVIRAQUETE(){
  if (keyIsDown(UP_ARROW)){
   yRAQUETE -=10; 
  }
  if (keyIsDown(DOWN_ARROW)){
   yRAQUETE +=10; 
  }
 }

 function COLISAORAQUETE(){
  if (xBALL - RAIO < xRAQUETE + lRAQUETE && yBALL - RAIO < yRAQUETE + aRAQUETE && yBALL + RAIO > yRAQUETE){
     vXBALL *= -1;
    RAQUETADA.play()}
   
 }

 function COLISAORAQUETEBOOK(x,y){
  COLIDIU = collideRectCircle(x, y, lRAQUETE, aRAQUETE, xBALL, yBALL, RAIO);
   if (COLIDIU){vXBALL *= -1;
   RAQUETADA.play();}
   }

 function MOVIMENTARAQUETE2(){
    if (keyIsDown(87)){
   yRAQUETE2 -=10; 
  }
  if (keyIsDown(83)){
   yRAQUETE2 +=10; 
  }
   }
 
 function PLACAR(){
   stroke(255)
   textAlign(CENTER);
   textSize(16);
   fill(color(255,0,0));
   rect(130,10,40,20);
   fill(255);
   text(PONTOS1,150,26);
   fill(color(255,0,0));
   rect(430,10,40,20);
   fill(255);
   text(PONTOS2,450,26);
   }

 function MARCAPONTO(){
   if (xBALL > 590){
     PONTOS1 += 1
     PONTO.play();
   }
  if (xBALL < 10){
    PONTOS2 += 1
    PONTO.play();
  }
 }
 


  