// Snake
// Matiachuk, Skyler
// October 11th 2023
//
// Some more practice with arrays

//Global Variables
let points=[];  //Snake Coordinates
let headLocation; //Object - where the head is
let speed=10;
let snakeLength=25;


function setup() {
  createCanvas(windowWidth, windowHeight);
  headLocation = new Point(width/2,height/2);
  initSnake();
  strokeWeight(15);
}


function initSnake(){
  //set up 5 points in our array
  for(let i=0;i<snakeLength;i++){
    points.push(createPoint());
  }



  /*
  points.push(new Point(10,10));
  points.push(new Point(30,30));
  points.push(new Point(60,30));
  points.push(new Point(80,10));
  points.push(new Point(80,70));
  */
}

function createPoint(){
  //keyboard control
  if(keyCode===RIGHT_ARROW) headLocation.x+=speed;
  else if(keyCode===LEFT_ARROW) headLocation.x-=speed;
  else if(keyCode===UP_ARROW) headLocation.y-=speed;
  else if(keyCode===DOWN_ARROW) headLocation.y+=speed;
  return new Point(headLocation.x,headLocation.y);
}

function displaySnake(){
  //loop throught all pairs of points
  for(let i=0;i<points.length-1;i++){
    let current=points[i];    //Current item
    let right=points[i+1];    //Right neighbour
    let alphaValue =map(i,0,points.length-1,0,255);
    stroke (0,alphaValue);
    line(current.x,current.y,right.x,right.y);
  }
}

function moveSnake(){
  //delete first poin, add a new point on the end
  points.splice(0,1);   //deleting the tail
  points.push(createPoint());
}

function draw() {
  
  displaySnake();
  moveSnake();
}

class Point{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
}