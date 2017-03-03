var array = reverseOrder.slice();
const merge_y_end = 300;
const n_merge = array.length;


function mergeSort(stage2){
  splitByIndex(0, n - 1, stage2);
}

function splitByIndex(low, high, stage2){
  let mid = Math.ceil( (low + high) / 2);
  stage2.removeAllChildren();
  array.forEach((num, i) => {
    let color = "black";
    if(num >= low && num <= mid){ color = "red";}
    if(num > mid && num <= high + 1){ color = "blue";}
    createLine(stage2, num, i, color);
  });
  console.log(array);

  if(high <= low){ return;}
  splitByIndex(low, mid - 1, stage2);
  splitByIndex(mid, high, stage2);

  let sorted = mergeByIndex(low, high, mid, stage2);
  sorted.forEach((num, i) => {
    array[i + low] = num;
  });
  stage2.removeAllChildren();
  array.forEach((num, i) => {
    let color = "black";
    if(num >= low && num <= mid){ color = "red";}
    if(num > mid && num <= high + 1){ color = "blue";}
    createLine(stage2, num, i, color);
  });
  console.log(array);

}

function mergeByIndex(low, high, mid, stage2){
  let sort = [];
  let left_i = low;
  let right_i = mid;
  while(left_i <= mid && right_i <= high){
    if(array[left_i] < array[right_i]){
      sort.push(array[left_i]);
      left_i += 1;
    } else {
      sort.push(array[right_i]);
      right_i += 1;
    }
  }
  stage2.removeAllChildren();
  array.forEach((num, i) => {
    let color = "black";
    if(num >= low && num <= mid){ color = "red";}
    if(num > mid && num <= high + 1){ color = "blue";}
    createLine(stage2, num, i, color);
  });

  return sort.concat(array.slice(left_i, mid).concat(array.slice(right_i, high)));
}

function createLine(stage2, num, i, color){
  let x = 300 + 25 * i;
  let y_start = merge_y_end - 25 * array[i];
  let line = new createjs.Shape();
  line.graphics.setStrokeStyle(5).beginStroke(color);
  line.graphics.lineTo(x, y_start);
  line.graphics.lineTo(x, merge_y_end);
  line.graphics.endStroke();
  stage2.addChild(line);
}
