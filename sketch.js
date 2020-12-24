// BULLETS & WALLS
// BY SHIVANSHU PATTNAIK

// VARIABLES
var bullet, speed, weight;
var wall, thickness; 

function setup() {
  
  createCanvas(1600, 400);

  thickness = random(22, 83);
  weight = random(30, 52);
  speed = random(223, 321);

  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;

  wall = createSprite(1500, 200, thickness, height / 2);
  wall.shapeColor = "white";

}

function draw() {
  
  background("black");
  
  var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

  if(bullet.isTouching(wall)){
    
    bullet.velocityX = 0;

    if(damage > 10){

      wall.shapeColor = "red";

      bullet.velocityX = 0;

    }
    if(damage < 10){
  
      wall.shapeColor = "green";
  
    }

  }

  drawSprites();

}