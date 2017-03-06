let mergeArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
const merge_y_end = 300;
let mergeArrays_to_render = [];
function mergeSort(){
  splitByIndex(0, mergeArray.length - 1);
}



function splitByIndex(low, high){
  if(high <= low){ return;}
  let mid = Math.ceil( (low + high) / 2);



  mergeArrays_to_render.push([mergeArray.slice(0, low), mergeArray.slice(low, mid), mergeArray.slice(mid, high + 1), mergeArray.slice(high+1, mergeArray.length)]);
  splitByIndex(low, mid -1);
  splitByIndex(mid, high);
  mergeArrays_to_render.push([mergeArray.slice(0, low), mergeArray.slice(low, mid), mergeArray.slice(mid, high + 1), mergeArray.slice(high+1, mergeArray.length)]);
  mergeByIndex(low, high, mid);
  mergeArrays_to_render.push([mergeArray.slice(0, low), mergeArray.slice(low, mid), mergeArray.slice(mid, high + 1), mergeArray.slice(high+1, mergeArray.length)]);

}


function mergeByIndex(low, high, mid){
   let sort = [];
   let left_i = low;
   let right_i = mid;
   while(left_i <= mid && right_i <= high){
     if( mergeArray[left_i] < mergeArray[right_i]){
       sort.push(mergeArray[left_i]);
       left_i += 1;
     } else {
       sort.push(mergeArray[right_i]);
       right_i += 1;
     }
   }

   let sorted = sort.concat(mergeArray.slice(left_i, mid).concat(mergeArray.slice(right_i, high)));
   sorted.forEach((num, i) => {
     mergeArray[i + low] = num;
     });
  }

function mergeRender(stage2){
  mergeArrays_to_render.forEach((mergeArrays, i) => {
    setTimeout(() => mergeRenderStep(stage2, mergeArrays), 750 * (i));
  } )
}

function mergeRenderStep(stage2, mergeArrays){
  stage2.removeAllChildren();
  let x = 300;
  mergeArrays.forEach((arr, i) => {
    let color = "black";
    if(i === 1){ color = "red"};
    if(i === 2){ color = "blue"};
    if(i !== 0) { x += 25 * mergeArrays[i - 1].length };
    createMergeLines(stage2, arr, color, x);
  } )
}

function createMergeLines(stage2, arr, color, x){
  arr.forEach((num, i) => {
    createAMergeLine(stage2, num, color, x);
    x += 25
  })

}

function createAMergeLine(stage2, num, color, x){
  let y_start = merge_y_end - 20 * num;
  let line = new createjs.Shape();
  line.graphics.setStrokeStyle(5).beginStroke(color);
  line.graphics.lineTo(x, y_start);
  line.graphics.lineTo(x, merge_y_end);
  line.graphics.endStroke();
  stage2.addChild(line);
}
