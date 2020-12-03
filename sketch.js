var car,wall
var speed,weight

function setup() {
  createCanvas(2000,1000);
  
  car=createSprite(50,200,80,80)
   car.shapeColor="orange"
  wall=createSprite(1000,300,60,height/2);
  wall.shapeColor="red"

  speed=random(55,90)
  weight=random(400,1500)
}

function draw() {
  background(0); 

  car.velocityX=speed;
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
car.velocityX=0;
var deformation=0.5*weight*speed*speed/22509;
if(deformation>180);
{
  car.shapeColor="green";
}
if(deformation<180 && deformation>100 )
{
  car.shapeColor="yellow";
}
if(deformation<100)
{
  car.shapeColor="blue"
     
}
  }

  drawSprites();
}