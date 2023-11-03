// Diagonal Line Generator
// Matiachuk, Skyler
// October 24th 2023
//
// 
//Global Variables
let spacing =6;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(3);
  grid();
}
function diagonalAscending(x,y,s){
  line(x-s/2,y+s/2,x+s/2,y-s/2)
}
function diagonalDescending(x,y,s){
  line(x-s/2,y-s/2,x+s/2,y+s/2);
}

function grid(){  //find all x/y positions
  for(let x=0;x<width;x+=spacing){
    for(let y=0;y<height;y+=spacing){
      let choice=Math.floor(random(2)); //0-1
      if(choice===0)diagonalDescending(x,y,spacing);
      else if(choice===1)diagonalAscending(x,y,spacing);
    }
  }
}

/*
function draw() {
  background(220);
}
*/