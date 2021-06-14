var ship, shipImage, edges
var seaImage
var sea
function preload(){
seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  

  ship = createSprite(50,160,20,50);
  ship.addAnimation("moving", shipImage)
  edges = createEdgeSprites();

ship.addImage(shipImage)
  ship.scale = 0.5;
  ship.x = 50
  sea = createSprite(300, 190, 600, 5)
  ship.addImage(shipImage)
 sea.addImage(seaImage)
ground.velocityX = -10

}

function draw() {

  background("blue");
 
  
console.log(ship.y)


if(keyDown("right")){
  ship.velocityX = 10;
}

if (sea.x <0){
sea.x = sea.width/2
}


ship.velocityY = ship.velocityY + 0.5;


ship.collide(edges[3])
drawSprites();
}