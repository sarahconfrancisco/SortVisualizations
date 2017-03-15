let ARRAY = [];
function init(arrayType) {
  if(arrayType === 1){
      ARRAY.reverse();
  } else if( arrayType == 3) {
    let array = ARRAY.slice()
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    ARRAY = array;
  }
  quickArray = ARRAY.slice();
  quickLength = quickArray.length - 1;
  mergeArray = ARRAY.slice();
  bubbleArray = ARRAY.slice();
  m = bubbleArray.length;
  n = m + 1;
}
