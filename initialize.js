// let length = 10;
let ARRAY = [];
// document.getElementById("userLength").onchange = (e) => {
//   let new_l = parseInt(e.currentTarget.value);
//   if (new_l > 2 && new_l <= 20){
//     length = new_l
//   };
//   ARRAY = Array.apply(null, Array(length)).map(function (_, i) {return i + 1;});
//  }
// let radios = document.querySelectorAll("input[type=radio]");
// for(let i = 0; i < radios.length; i++){
//   radios[i].onclick = function(){
//     init(parseInt(this.value));
//   }
// }
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
