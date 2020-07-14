//Global Variables
var Monkey, Monkey_run;
var bkground, bkground_anime;
var banana1, banana1_anime;
var stone, stone_anime;
var gameOver, gameOver_anime;
var restart, restart_anime;
var ground, groound_anime;
var invis;
var bananaGroup;
var stoneGroup;
var score;
var PLAY;
var END;
var gameState;


function preload() {
  Monkey_run = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");

  bkground_anime = loadImage("jungle.jpg");
  stone_anime = loadImage("stone.png");
  banana1_anime = loadImage("Banana.png");
  gameOver_anime = loadImage("gameOver.png");
  restart_anime = loadImage("restart.png");
  ground_anime = loadImage("ground.jpg");


}


function setup() {
  createCanvas(600, 300);


  
  bkground = createSprite(300,0, 1200,600);
  bkground.addImage(bkground_anime);
  bkground.scale = 1.2
  bkground.velocityX = -7;
  
  gameOver = createSprite(330,200,600,300);
  gameOver.addImage(gameOver_anime);


  Monkey = createSprite(100, 200, 10, 10);
  Monkey.addAnimation("mon", Monkey_run);
  Monkey.scale = 0.1;


  invis = createSprite(100, 200, 100, 5);
  invis.visible = false;
  
  restart = createSprite(300,120,10,10);
  restart.addImage(restart_anime);
  
  score = 0;

  bananaGroup = new Group();
  stoneGroup = new Group();
  
  PLAY = 1;
  END = 0;
  gameState = PLAY; 
  
  restart.visible = false;
  gameOver.visible = false; 

}


function draw() {
  background(255);

if (gameState === PLAY){
   if (keyDown("space") && Monkey.y >= 130) {
    Monkey.velocityY = -14;
  }
  Monkey.velocityY = Monkey.velocityY + 0.8;


  if (Monkey.isTouching(bananaGroup)) {
    score = score + 2;
    bananaGroup.destroyEach();
  }

  if (Monkey.isTouching(stoneGroup)) {
    score = score - 1;
    stoneGroup.destroyEach();
    Monkey.scale = 0.1;
  }

  switch (score) {
    case 10:
      Monkey.scale = 0.12;
      break;
    case 20:
      Monkey.scale = 0.14
      break;
    case 30:
      Monkey.scale = 0.16
      break;
    case 40:
      Monkey.scale = 0.18
      break;
    default:
      break;
      
  }
  
  if (bkground.x < 0){
   bkground.x = bkground.width/2; 
  }

 Monkey.collide(invis);

  if (score === -1){
gameState = END
}

if (gameState === END){
    
    }





 
  stroke("red");
  textSize(20);
  fill("red");
  banana();
  stone1();
}
 
  drawSprites();
  text("Score : " + score, 450, 20);

  function banana() {
    if (frameCount % 80 === 0) {
      var banana1 = createSprite(560, 90, 10, 10);
      banana1.addImage(banana1_anime);
      banana1.velocityX = -7;
      banana1.scale = 0.04;
      banana1.lifetime = 90;
      bananaGroup.add(banana1);
    }
  }

  function stone1() {
    if (frameCount % 80 === 0) {
      var stone2 = createSprite(560, 170, 10, 10);
      stone2.addImage(stone_anime);
      stone2.velocityX = -7;
      stone2.scale = 0.15;
      stone2.lifetime = 90;
      stoneGroup.add(stone2);
    }
  }









}