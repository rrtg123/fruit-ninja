//CREATING VARIABLES FOR  IMAGES,SOUNDS GROUPS AND SPRITES
var knifeSound,knifeIm,knife;
 var alien1Im,alien2Im;
 var fruitIm1,fruitIm2,fruitIm3,fruitIm4;
var alienG1,alienG2,fruitG1,fruitG2,fruitG3,fruitG4;

var gameover,gosound,goIm;
//MAKING SCORE VARIABLE AND GAMESTATES
var score=0;
var PLAY=1;
var END =0;
var gameState=1;
//LOADING Images in preload
function preload(){
  knifeIm=loadImage("sword.png");
alien1Im=loadImage("alien1.png");
  alien2Im=loadImage("alien2.png");

goIm=loadImage("gameover.png");
  fruitIm1=loadImage("fruit1.png");
fruitIm2=loadImage("fruit2.png");
   fruitIm3=loadImage("fruit3.png");
   fruitIm4=loadImage("fruit4.png");
  
}
//creating sprites and their setup in the setup function
function setup(){
  createCanvas(600,400);
  knife=createSprite(300,350,10,10);
  knife.addImage(knifeIm);
  knife.scale=0.5;
  gameover=createSprite(300,200,20,20);
  gameover.addImage(goIm);
  //creating the group  by oops method(object oriented programing)
  fruitG1=new Group();
  alienG1=new Group();
fruitG2=new Group();
  alienG2=new Group();
fruitG3=new Group();
  fruitG4=new Group();



}

function draw(){
  //background should be brown
background("brown");
  //condition if  gamestate is play
  if(gameState===1){
  //game over image  should not be visible
  gameover.visible=false;
    //knife should move in xy direction  of mouse
  knife.x=World.mouseX;
  knife.y=World.mouseY;
  //giving framecount to fruits and aliens and calling fruit and alien function
  if(frameCount%10===0){
  fruits();
  
  }
  if(frameCount%90===0){
    aliens();
  }
    //condition if  group of first fruit touches the knife same for others
    if(fruitG1.isTouching(knife)){
      fruitG1.destroyEach();
      score=score+2;
    }
     if(fruitG2.isTouching(knife)){
      fruitG2.destroyEach();
      score=score+4;
    }
     if(fruitG3.isTouching(knife)){
      fruitG3.destroyEach();
      score=score+6;
    }
     if(fruitG4.isTouching(knife)){
      fruitG4.destroyEach();
      score=score+8;
    }
    //if alien touches the knife then gamestate should go in end state
    if(alienG1.isTouching(knife)){
      
      gameState=0;
    }
    if(alienG2.isTouching(knife)){
  
      gameState=0;
    }
  }
  //only    game overe and score should be visible in gamestate end
  if(gameState===0){
    gameover.visible=true;
    knife.visible=false;
    fruitG1.visible=false;
    fruitG2.visible=false;
    fruitG3.visible=false;
    fruitG4.visible=false;
  }
  drawSprites();
  fill("white");
  text("Score:"+score,520,50);
}

function fruits(){
  //creating variable for selecting  fruits randomly
  //simultaneously calling fruit1-4  functions
  var select_fruit=Math.round(random(1,4));
  if(select_fruit==1){
    fruit1();
  }
   if(select_fruit==2){
    fruit2();
  } 
  if(select_fruit==3){
    fruit3();
  }
  if(select_fruit==4){
    fruit4();
  }
}
//creating variable for selcting aliens randomly and simultaneously calling alien1-12 function
function aliens(){
  var select_alien=Math.round(random(1,2))
  if(select_alien==1){
    alien1();
  }
  if (select_alien==2){
    alien2();
  }
}
//creating profile for fruit 1 to fruit 4  in fruit 1 to fruit 4 functions,the x axis should be in random position above
//adding all fruits in respactive groups
function fruit1(){
var fruit1=createSprite(Math.round(random(5,555)),0,10,10);
  fruit1.addImage(fruitIm1);
  fruit1.scale=0.1;
  fruit1.lifetime=200;
  fruit1.velocityY=7;
  fruitG1.add(fruit1);
}
function fruit2(){
var fruit2=createSprite(Math.round(random(5,555)),0,10,10);
  fruit2.addImage(fruitIm2);
  fruit2.scale=0.1;
  fruit2.lifetime=200;
  fruit2.velocityY=7;
  fruitG2.add(fruit2);
}
function fruit3(){
var fruit3=createSprite(Math.round(random(5,555)),0,10,10);
  fruit3.addImage(fruitIm3);
  fruit3.scale=0.1;
  fruit3.lifetime=200;
  fruit3.velocityY=7;
  fruitG3.add(fruit3);
}

function fruit4(){
var fruit4=createSprite(Math.round(random(5,555)),0,10,10);
  fruit4.addImage(fruitIm4);
  fruit4.scale=0.1;
  fruit4.lifetime=200;
  fruit4.velocityY=7;
  fruitG4.add(fruit4);
}
//same for aliens
function alien1(){
  var alien1=createSprite(Math.round(random(5,555)),0,10,10);
  alien1.addImage(alien1Im);
  alien1.scale=0.5;
  alien1.lifetime=200;
  alien1.velocityY=15;
  alienG1.add(alien1);
}
function alien2(){
  var alien2=createSprite(Math.round(random(5,555)),0,10,10);
  alien2.addImage(alien2Im);
  alien2.scale=0.5;
  alien2.lifetime=200;
  alien2.velocityY=15;
  alienG2.add(alien2);
}







