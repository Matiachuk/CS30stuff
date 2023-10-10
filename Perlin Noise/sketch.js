// Perlin Noise
// Matiachuk, Skyler
// Date
//
// Using Perlin Noise to make a terrain generator

//Global Variables
let rectWidth = 1;
let rectHeight = 0;
let rectPosX = 0;
let flagPosX;
let flagPosY;
let noisePositionHeight =20;
const noiseShift = 0.01;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  generateTerrain();
  drawFlag();
}

function draw() {
  
  
}

function generateTerrain(){

  for(let rectPosX=0;rectPosX<width;rectPosX+=rectWidth){
    
   

    rectHeight = noise(noisePositionHeight); //0-1
    rectHeight=map(rectHeight,0,1,2,height);
    noisePositionHeight+=noiseShift;
  
    rect(rectPosX,height,rectPosX+rectWidth,rectHeight);    //Draws all rectangles
    }
    
}

function drawFlag(){
  flagPosY=height;
  flagPosX=0;
  if(flagPosY>rectHeight){
    flagPosY=rectHeight;
    flagPosX=rectPosX;
    fill(40,50,178);
    rect(flagPosX,flagPosY,10,10);
  }
  
}