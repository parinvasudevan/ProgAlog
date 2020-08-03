var fixedRect,movingRect




function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(400, 200, 50, 50);
 fixedRect.shapeColor = "green"
 movingRect = createSprite(400, 200, 70, 20);
 movingRect.shapeColor = "green"
}

function draw() {
  background(255,255,255);
  movingRect.x = mouseX;
  movingRect.y = mouseY;   
  drawSprites();
}