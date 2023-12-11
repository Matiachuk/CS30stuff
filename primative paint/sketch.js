// Primitive Paint
// Matiachuk, Skyler
// December 6th, 2023
//
// Global Variables
let size = 0; //Minimum size of warpingSquare()
let notReady =true; //Checks if the square in warpingSquare() is ready to decrease in size

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill(random(255),random(255),random(255));
  warpingSquare();
  keyPressed();
  
}

function warpingSquare(){ //Creates a square that increases/decreases in size making a void (black box) for itself when decreasing
  if(size<50 && notReady===true){  //not ready to decrease in size
    size++
  }
  else if(notReady===false){  //ready to decrease in size
    if(size===0){
    notReady=true;
    }
    else{
    size--;
    }
   }
  else if(notReady===true){ //changes not ready to true making the square increase in size
    notReady=false;
  }
  square(width/2,height/2,size);
}

function keyPressed(){  //Checks if key is pressed and creates a shape at mouse position based on button pressed
  if(keyIsPressed===true){
    if(key === "a"){
      rect(mouseX,mouseY,40,80);
    }
    else if(key === "s"){ 
      ellipse(mouseX,mouseY,40);
    }
    else if(key === "d"){
      quad(mouseX,mouseY,mouseX+46/*controls right X point*/,mouseY-28/*controls right Y point*/,mouseX/*controls top X point*/,mouseY-52/*controls top Y point*/,mouseX-46/*controls left X point*/,mouseY-28/*controls left Y point*/);
    }
  }
    
}