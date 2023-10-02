// Multi-coloured Grid
// Matiachuk, Skyler
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Global Variables
let numSegments = 20;
let segmentHeight;
let segmentWidth;
let currentBackground =0; //state variable (0-2)

function setup() {
  createCanvas(windowWidth, windowHeight);
  segmentHeight = height/numSegments;
  segmentWidth = width/numSegments;
  document.addEventListener("contextmenu", event => event.preventDefault())
}

function gradient(){
  //draw a series of skinny rectangles - gradient
  //noStroke();
  for(let i = 0; i < numSegments; i++){ //repeat 7 loop
    let y= i * segmentHeight;
    let a= i * segmentWidth;
    let c = map(y,0,height,0,255);
    fill(c,255-c,255);
    rect(0,y,width,segmentHeight);
    rect(a,0,segmentWidth,height);

  }
}

function selectBackground(){
  //check the state variable currentBackground
  //and render the appropriate one.
  if(currentBackground===0) gradient();
  else if (currentBackground===1)background(255);
  else background(60,240,120);  
}

function draw() {
  selectBackground();
  
}

function mousePressed(){
  print(mouseButton);
  if (mouseButton===LEFT){
    currentBackground-=1;
    if(currentBackground<0)currentBackground=2;
  }
  if(mouseButton===RIGHT){
    currentBackground+=1;
    if(currentBackground>2)currentBackground=0;
  }
  return false; //overide default behaviour
}