// Cars 4
// Matiachuk, Skyler
// Date
//
//
//Global Variables
let eastbound=[];
let westbound=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  road();
  for(let i=0;i<eastbound.length;i++){
  eastbound[i].action();
  }
}

function mouseClicked(){

    eastbound.push(new Vehicle(mouseX,mouseY,1,2));
}

class Vehicle{
  constructor(x,y,dir,s){
    this.x=x;
    this.y=y;
    this.dir=dir;
    this.s=s;
    this.c=color(random(255),random(255),random(255));
    this.type=int(random(2));
  }
  action(){
    //Calls other functions like move, speedUp, etc...
    this.display();
    this.move();
  }
  display(){
    if(this.type===0){  //0-car
        this.drawCar();
    }
    else if(this.type===1){ //1-truck
      this.drawTruck();
    }
  }
  move(){
    this.s+=random(this.s,5);
    this.x+=this.s//+=random(5,15); //
  }
  drawCar(){
    fill(this.c);
    rect(this.x,this.y,100,40);
  }
  drawTruck(){
    fill(this.c);
    ellipse(this.x,this.y,100,40);
  }
}

function road(){
  fill(0,0,0);
  rect(0,height/4*0.9,width,550);
  fill(255,255,0);
  for(let roadLine=0;roadLine<windowWidth;roadLine+=100){
    rect(roadLine,height/2,50,10);
    
  }
  
  
}