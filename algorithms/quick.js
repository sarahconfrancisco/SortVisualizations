let quickArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
const quick_y_end = 300;
let quickArrays_to_render = [];
let quickLength = quickArray.length - 1;

function quickSort(stage3){
  quickSortByIndex(0, quickLength);
}

function quickSortByIndex(left_i, right_i){


  let pivot;
  if(left_i <= right_i){
    pivot = right_i;
    partitionIndex = partitionByIndex(pivot, left_i, right_i);

   //sort left and right
   console.log(quickArray);
   quickSortByIndex(left_i, partitionIndex - 1);
   quickSortByIndex(partitionIndex + 1, right_i);
   console.log(quickArray);
  }
  return quickArray;
}

function partitionByIndex(pivot, left_i, right_i){
   var pivotValue = quickArray[pivot],
       partitionIndex = left_i;
   console.log(quickArray);

   for(var i = left_i; i <= right_i; i++){
     console.log(quickArray);
    if(quickArray[i] < pivotValue){
      swap(i, partitionIndex);
      partitionIndex++;
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
