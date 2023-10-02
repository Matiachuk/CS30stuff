// First Objects Demo
// Matiachuk, Skyler
// October 2nd, 2023
//
// A bunch of walkers out for a walk

//Global Variables
let walkers= [];
const NUM_WALKERS =50

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i=0;i<NUM_WALKERS;i++){
    let newColour =color(random(255),random(255),random(255))
    walkers.push(new Walker(width/2,height/2,newColour))
  }
}

function draw() {
  background(220);
  for(let )
  w.move();
  w.display();
}

class Walker{
  //Class constructor and properties
  constructor(x,y,c){
    this.x =x;
    this.y =y;
    this.c =c;
    this.speed =10;
    this.size =10;
  }

  //Class methods and functions
  display(){    //Draw the Walker at its position
    rectMode(CENTER);
    fill(this.c);
    square(this.x,this.y,this.size);


  }
  move(){   //Move via random walker algorithm 
    // ↑↓→← 25% random()0-3
    let myChoice =Math.floor(random(4)); //0-3
    if(myChoice===0) this.x -= this.speed; //LEFT
    else if(myChoice===1) this.x += this.speed //RIGHT
    else if(myChoice===2) this.y -= this.speed //UP
    else this.y += this.speed //DOWN
  }
}
