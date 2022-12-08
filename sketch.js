var box;


function setup() {
 createCanvas(700, 400);

 box = createSprite(340, 50, 30,30);
 box.shapeColor = "yellow";

}

function draw(){
 background("black");

 drawSprites();

}