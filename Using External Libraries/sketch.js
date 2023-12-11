// External Libraries
//Matiachuk, Skyler
//December 1st, 2023

let scribble;
let circleD=100;


function setup() {
  frameRate(60);
  createCanvas(windowWidth, windowHeight);
  scribble=new Scribble();
}

function draw() {
  background(220);
  if(collideRectCircle(mouseX,mouseY,120,60,width/2,height/2,circleD)){
    fill(255,255,0);
  }
  else{
    fill(255);
  }
  circle(width/2,height/2,circleD);
  rect(mouseX,mouseY,120,60);
  //scribble.scribbleRect (mouseX,mouseY,120,60);
}
