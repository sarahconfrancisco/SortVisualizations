let quickArray;
const quick_y_end = 300;
let quickArrays_to_render = [];
let quickLength;

function quickSort(){
  quickSortByIndex(0, quickLength);
  quickArrays_to_render.push([quickArray.slice(), null, null, null]);
}

function quickSortByIndex(left_i, right_i){

  let pivot;
  if(left_i < right_i){
    let partition = partitionByIndex(left_i, right_i);


   quickSortByIndex(left_i, partition - 1);
   quickSortByIndex(partition + 1, right_i);
  }
  return quickArray;
}

function partitionByIndex(left_i, right_i){
   var pivotValue = quickArray[left_i],
       partitionIndex = left_i + 1, pivot = left_i;

   for(var i = left_i + 1; i <= right_i; i++){
    // console.log(quickArray.slice(), quickArray[i], quickArray[partitionIndex], pivotValue);
    quickArrays_to_render.push([quickArray.slice(), pivot, partitionIndex, i]);
    if(quickArray[i] < pivotValue){
      swap(i, partitionIndex);
      quickArrays_to_render.push([quickArray.slice(), pivot, i, partitionIndex]);
      partitionIndex++;
    }
  }
  swap(pivot, partitionIndex - 1);
  quickArrays_to_render.push([quickArray.slice(), partitionIndex - 1, pivot, pivot]);
  return partitionIndex - 1;
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
  let pivot = quickStep[1];
  let partition = quickStep[2];
  let current = quickStep[3];
  let x = 100;
  stage3.removeAllChildren();
  quickArr.forEach((num, i) => {
    let color = "black";
    if(i === pivot){ color = "red";}
    if(i === partition){ color = "blue"; }
    if( i === current) { color = "yellow";}
    createAQuickLine(stage3, num, color, x);
    x += 25;
  })
}

function createAQuickLine(stage3, num, color, x){
  let y_start = quick_y_end - 15 * num;
  let line = new createjs.Shape();
  line.graphics.setStrokeStyle(5).beginStroke(color);
  line.graphics.lineTo(x, y_start);
  line.graphics.lineTo(x, quick_y_end);
  line.graphics.endStroke();
  stage3.addChild(line);
}
