var girl,girlImg;
var boy,boyImg;
var road,roadImg;


function preload(){
  girl = loadImg("girl.png");
  road = loadImg("road.png");
  boy = loadImg("boy.png");
}

function setup(){
  
  createCanvas(1200,300);
  road =createSprite(100,150);
  road.addImage("road",roadImg);
  road.velocityX = -5;

  girl  = createSprite(70,150);
  girl.addImage("girl",girlImg);
  girl.scale=0.07;

    
}

function draw() {
  background(0);
  drawSprites();

  if(road.x < 0 ){
    road.x = width/2;
}
  
}
