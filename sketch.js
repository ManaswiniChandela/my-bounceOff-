var fixedRect, movingRect;
var s1, s2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 00, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  s1 = createSprite(800, 100, 50, 80);
  s1.shapeColor = "green";
  s1.debug = true;
  s2 = createSprite(00, 100,80,30);
  s2.shapeColor = "red";
  s2.debug = true;

  s2.velocityX = +5;
  s1.velocityX = -5;
}

function draw() {
  background(0,0,0);  

  bounceOff(s1,s2);  
  drawSprites();
}

function bounceOff(ob1,ob2)
{
    
  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
      && ob2.x - ob1.x < ob2.width/2 + ob1.width/2) {
        ob1.velocityX = ob1.velocityX * (-1);
        ob2.velocityX = ob2.velocityX * (-1);
  }
  if (ob1.y - ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y - ob1.y < ob2.height/2 + ob1.height/2){
      ob1.velocityY = ob1.velocityY * (-1);
      ob2.velocityY = ob2.velocityY * (-1);
  }
}




