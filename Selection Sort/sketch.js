// Selection Sort implementation
// Matiachuk, Skyler
// November 3rd 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let values=[];
const ARRAY_SIZE=200;
function setup() {
  noCanvas();  populateArray();
  print(values); selectionSort();    print(values);
}

function selectionSort(){
  //for each index, find smallest remaining value to the right
  //and swap if it is lower than the one on the left
  for(let index=0;index<values.length-1;index++){
    let minimum=values[index];
    let minimumLoc=index;
    for(let searchIndex=index+1;searchIndex<values.length;searchIndex++){
      let cur=values[searchIndex];
      if(cur<minimum){
        minimum=cur;
        minimumLoc=searchIndex;
      }
    }
    //swap the item at index with the item at minimumLoc
    let temp=values[index];
    values[index]=values[minimumLoc];
    values[minimumLoc]=temp;
  }
}

function populateArray(){
  //using a loop, fill our array with many random numbers
  for(let i=0;i<ARRAY_SIZE;i++){
    values.push(floor(random(1000)));
  }
}
