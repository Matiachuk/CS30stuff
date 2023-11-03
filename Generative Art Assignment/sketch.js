// 4th/bottom right Generative Art replication
// Matiachuk, Skyler
// 
//
// Replicating Generated Art


function setup() {
  createCanvas(windowWidth, windowHeight);
  drawLines();
}
function drawLines(){
  let y=600 //places the curved line
  for(let i=0;i<90;i++){
    curve(200, y, 400, y-200, 500, y-200, 800, y, 1, 75, 66, 1);//makes a curved line with one curved point
    y+=2; //makes the lines stack
  }
}

/*
function draw() {
  background(220);
}
*/
