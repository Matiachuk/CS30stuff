// Genearative Art - Colours Demo
// Matiachuk, Skyler
// October 25th 2023
//
//
//Global Variables
let rectWidth =50; let rectHeight =10;
let colors =["#FCEEED","#F7C6C2","#FAA39C","#D9D7C2","#948D71","#FCEEED","#F7C6C2","#FAA39C"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  drawColRGB(width*0.1); //col at 10% across canvas
  drawColHSB(width*0.4); //col at 40% across canvas
  drawColCustom(width*0.7); //col at 70% across canvas
}
function drawColCustom(xPos){
  colorMode(RGB);
  let counter =0;
  for(let y=0;y<height;y+=rectHeight){
    //option 1 
    //fill(colors[counter%5]);  //%5 →0,1,2,3,4
    fill(colors[Math.floor(random(colors.length))]);
    rect(xPos,y,rectWidth,rectHeight)
    counter++
  }
}
function drawColHSB(xPos){
  colorMode(HSB,360);
  for(let y=0;y<height;y+=rectHeight){
    /*fill HUE 0-360,   SATURATION, BRIGHTNESS
    y 0-800
    y%360
    */
    fill(y/2%360,360,360);
    rect(xPos,y,rectWidth,rectHeight);
  }

}

function drawColRGB(xPos){
  colorMode(RGB); //back to the default
  for(let y=0;y<height;y+=rectHeight){
    fill(random(255),random(255),random(255));
    rect(xPos,y,rectWidth,rectHeight);
  }

}
