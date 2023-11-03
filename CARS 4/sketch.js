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

    eastbound.push(new Vehicle(mouseX,mouseY,1));
}

class Vehicle{
  constructor(x,y,dir){
    this.x=x;
    this.y=y;
    this.dir=dir;
    this.c=color(random(255),random(255),random(255));
    this.s=10;
    this.type=int(random(2));
  }
  action(){
    //Calls other functions like move, speedUp, etc...
    this.display();
  }
  display(){
    if(this.type===0){  //0-car
        this.drawCar();
    }
    else if(this.type===1){ //1-truck
      this.drawTruck();
    }
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