var frect;
var mrect;

function setup() {
  createCanvas(800,400);
  frect=createSprite(400, 200, 50, 50);
  frect.shapeColor="pink";
  mrect=createSprite(600,200,50,50)
  mrect.shapeColor="pink";
  mrect.velocityX=-4;
}

function draw() {
  background(0);  
   if(mrect.x-frect.x<mrect.width/2+frect.width/2 && 
    frect.x-mrect.x<mrect.width/2+frect.width/2  &&
    mrect.y-frect.y<mrect.height/2+frect.height/2  &&
    frect.y-mrect.y<mrect.height/2+frect.height/2 ){

      mrect.velocityX=mrect.velocityX * (-1);
    }
  drawSprites();
}