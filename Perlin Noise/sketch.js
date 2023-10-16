// Terrain Generation
// Matiachuk, Skyler
// October Friday The 13th 2023
//
// Using Perlin Noise to make a terrain generator

//Global Variables
let rectWidth = 1;
let rectHeight = 0;
let rectPosX = 0;
let noisePositionHeight =30;
const noiseShift = 0.006282185304179586376925286766559005768394;    //this is pi but doubled and moved three decimal places


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  generateTerrain();
  
}

function draw() {
  background(220);
  generateTerrain(noisePositionHeight);
  noisePositionHeight+=noiseShift;    //Pans the screen
  
}

function generateTerrain(noisePositionHeight){   //Generates terrain using perlin noise
  for(let rectPosX=0;rectPosX<width;rectPosX+=rectWidth){
    rectHeight = noise(noisePositionHeight); //0-1
    rectHeight=map(rectHeight,0,1,2,height);
    noisePositionHeight+=noiseShift;
    rect(rectPosX,height,rectPosX+rectWidth,rectHeight);    //Draws all rectangles
    }
    
}

