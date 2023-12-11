// Puzzle Game
// Matiachuk, Skyler 
// November 14th, 2023
//
// I was puzzled


let grid =
[[255,  0,  255,   0,  255],
 [0,   0,    0,    255,  0],
 [255, 255,  0,    255,  0],
 [255, 0,    0,    255,  0]];

const NUM_ROWS = 4;  const NUM_COLS = 5;
let rectWidth, rectHeight, row, col;

function setup() {
  rectWidth = 50;  rectHeight = 50;
  createCanvas(NUM_COLS*rectWidth, NUM_ROWS*rectHeight);
  noCursor();
}

function draw() {
  winnerWinner();
  row = getCurrentY();   col = getCurrentX();
  background(220);
  renderGrid();
  print(col,row); //prints x,y
  fill(255,0,0);
  circle(mouseX,mouseY,5);
  winnerWinner();
}

function winnerWinner(){
  if(grid ===
    [[0,0,0,0,0],
     [0,0,0,0,0],
     [0, 0,0,0,0],
     [0, 0,0,0,0]] || grid ===
     [[255,255,255,255,255],
      [255,255,255,255,255],
      [255,255,255,255,255],
      [255,255,255,255,255]]){
        return print("Winner!");
      }
}
function mousePressed(){
  //when the mouse is clicked, flip the value at the current
  //col,row + also flip 4 cardinal neighbours (North, S, E, W)
  
  // flip @ mouseposition

  // flip the 4 neighbours ↑↓→←
  if(keyIsDown(SHIFT)){
    flip(col,row);
  }
  else{
    // flip @ mouseposition
    flip(col,row);
    if(col < NUM_COLS-1) flip(col+1, row); //RIGHT NEIGHBOUR
    if(row > 0) flip(col,row-1); //UP NEIGHBOUR
    if(col>0) flip(col-1, row); //LEFT NEIGHBOUR
    if(row <NUM_ROWS-1) flip(col,row+1); //DOWN NEIGHBOUR
  }
}


    


function flip(col, row){
  //at a given x,y, flip the value in the 2D array
  //0→255   255→0
  if(grid[row][col] === 0) grid[row][col] = 255;
  else grid[row][col] = 0;
}

function getCurrentX(){ //determine current column mouse is in, and return
  let constrainMouseX = constrain(mouseX, 0, width-1);
  return floor(constrainMouseX/rectWidth);  
}
function getCurrentY(){ //determine current row mouse is in, and return
  let constrainMouseY = constrain(mouseY, 0, height-1);
  return floor(constrainMouseY/rectHeight);
}

function renderGrid(){
  //creates a 2D grid of squares using information from our
  //2D array for the corresponding fill values
  for(let x = 0; x < NUM_COLS; x++){
    for(let y = 0; y < NUM_ROWS; y++){
      let fillValue = grid[y][x];
      fill(fillValue);
      //x:    0,   1,   2,  3,   4
      //posx  0   50, 100, 150,200   expression? x→posx
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}