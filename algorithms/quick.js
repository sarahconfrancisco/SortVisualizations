const reverseOrder = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
const y_end = 600;
const n = reverseOrder.length;

function quickSort(stage){

}


function createLines(i, x, stage, currentLine, j){
  if( i === n){
    return null;
  }
  let color = "black";
  if(i === currentLine){
    color = "red";
  }
  if (i === j){
    color = "blue";
  }
  let y_start = y_end - 25 * reverseOrder[i];
  let line = new createjs.Shape();
  line.graphics.setStrokeStyle(5).beginStroke(color);
  line.graphics.lineTo(x, y_start);
  line.graphics.lineTo(x, y_end);
  line.graphics.endStroke();
  stage.addChild(line);
  createLines(i + 1, x + 25, stage, currentLine, j);

}
