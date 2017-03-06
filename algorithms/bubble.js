const bubbleArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
const bubble_y_end = 300;
const m = bubbleArray.length;
let n = m + 1;
function whileLoop(stage, sorted){
  n -= 1;
  if(sorted){
    return null;
  }

  sorted = true;
  stage.removeAllChildren();
  createLines(0, 280, stage, 11);
  forLoop(0, stage, sorted);
}

function forLoop(i, stage, sorted){
  stage.removeAllChildren();
  createLines(0, 300, stage, i, i + 1);
  if(bubbleArray[i] > bubbleArray[i + 1]){
    let temp = bubbleArray[i];
    bubbleArray[i] = bubbleArray[i + 1];
    bubbleArray[i + 1] = temp;
    sorted = false;
  }
  if(i === n - 2){
    setTimeout(() => whileLoop(stage, sorted), 750);
  } else {
    setTimeout(() => forLoop(i + 1, stage, sorted), 750);
  }
}

function createLines(i, x, stage, currentLine, j){
  if( i === m){
    return null;
  }
  let color = "black";
  if(i === currentLine){
    color = "red";
  }
  if (i === j){
    color = "blue";
  }
  let y_start = bubble_y_end - 20 * bubbleArray[i];
  let line = new createjs.Shape();
  line.graphics.setStrokeStyle(5).beginStroke(color);
  line.graphics.lineTo(x, y_start);
  line.graphics.lineTo(x, bubble_y_end);
  line.graphics.endStroke();
  stage.addChild(line);
  createLines(i + 1, x + 25, stage, currentLine, j);

}

function bubbleSort(stage) {
  let sorted = false;
  whileLoop(stage, sorted);
};
