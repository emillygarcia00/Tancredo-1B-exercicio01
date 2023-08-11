function setup() {
  createCanvas(600, 600);
  background("cyan");
}

function draw() {
  stroke("yellow");
  fill("purple");
  
  
  
  if(mouseIsPressed){
     rect(mouseX,mouseY,50, 50);
  }
  
}