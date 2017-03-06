let quickArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
const quick_y_end = 300;
let quickArrays_to_render = [];
let quickLength = quickArray.length - 1;

function quickSort(){
  quickSortByIndex(0, quickLength);
  quickArrays_to_render.push([quickArray.slice(), null, null, null]);
}

function quickSortByIndex(left_i, right_i){


  let pivot;
  if(left_i <= right_i){
    pivot = right_i;
    partitionIndex = partitionByIndex(pivot, left_i, right_i);


   quickSortByIndex(left_i, partitionIndex - 1);
   quickSortByIndex(partitionIndex + 1, right_i);
  }
  return quickArray;
}

function partitionByIndex(pivot, left_i, right_i){
   var pivotValue = quickArray[pivot],
       partitionIndex = left_i;

   for(var i = left_i + 1; i <= right_i; i++){
    //  console.log(quickArray, i, partitionIndex, pivot);
    quickArrays_to_render.push([quickArray.slice(), i, partitionIndex, pivot]);
    if(quickArray[i] < pivotValue){
      swap(i, partitionIndex);
      partitionIndex++;
      quickArrays_to_render.push([quickArray.slice(), i, partitionIndex, pivot]);
    }
  }
  swap(right_i, partitionIndex);
  return partitionIndex;
}

function swap(i, j){
   var temp = quickArray[i];
   quickArray[i] = quickArray[j];
   quickArray[j] = temp;
}

function quickRender(stage3){
  quickArrays_to_render.forEach((quickStep, i) => {
    setTimeout(() => quickRenderStep(stage3, quickStep), 750 * (i));
  })
}

function quickRenderStep(stage3, quickStep){
  let quickArr = quickStep[0];
  let compare1 = quickStep[1];
  let compare2 = quickStep[2];
  let pivot = quickStep[3];
  let x = 300;
  stage3.removeAllChildren();
  quickArr.forEach((num, i) => {
    let color = "black";
    if(i === compare1 || i === compare2){ color = "blue";}
    if(i === pivot){ color = "red"; }
    createAQuickLine(stage3, num, color, x);
    x += 25;
  })
}

function createAQuickLine(stage3, num, color, x){
  let y_start = quick_y_end - 20 * num;
  let line = new createjs.Shape();
  line.graphics.setStrokeStyle(5).beginStroke(color);
  line.graphics.lineTo(x, y_start);
  line.graphics.lineTo(x, quick_y_end);
  line.graphics.endStroke();
  stage3.addChild(line);
}
