// Multi-coloured Grid
// Matiachuk, Skyler
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Global Variables
let rectSize =20; //Rectangle size

function setup() {
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault())
  grid();
}
function draw() {
  mousePressed();
}
function grid(){
  for(let y=0;y<height;y+=rectSize){    //
    for(let x=0;x<width;x+=rectSize){
      fill(random(255),random(255),random(255));    //Fills rectangles to random colours
      rect(x,y,rectSize,rectSize);    //Draws all rectangles
    }
  }
}
function mousePressed(){
  print(mouseButton);
  if (mouseIsPressed===true){   //This allows the loop to stop as the mouse buttons have to be clicked to change size
    if (mouseButton===LEFT){    //Left click
      rectSize+=1;    //Increases rectangle size
      grid();   //Redraws the grid to the larger rectangles
    }
    if(mouseButton===RIGHT){    //Right click
      rectSize-=1;    //Decreases rectangle size
      grid();
    }
  return false; //overide default behaviour
    }
}
function keyPressed(){
  if(keyIsPressed===true){
    if(keyCode===ENTER){
      grid();
    }
  }
}