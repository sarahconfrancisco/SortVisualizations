function run(){
    createjs.Ticker.setFPS(60);
    const stage1 = new createjs.Stage("canvas1");
    createjs.Ticker.addEventListener("tick", stage1);
    const stage2 = new createjs.Stage("canvas2");
    createjs.Ticker.addEventListener("tick", stage2);
    const stage3 = new createjs.Stage("canvas3");
    createjs.Ticker.addEventListener("tick", stage3);
    let length = document.getElementById("userLength").value > 2;
    if (length < 2 || new_l > 20){
      length = 10;
    };
    let arrayType;
    ARRAY = Array.apply(null, Array(length)).map(function (_, i) {return i + 1;});
    document.querySelectorAll("input[type=radio]").forEach((el) => {
      if(el.checked){
        arrayType = parseInt(el.value);
      }
    });
    init(arrayType);
    mergeSort();
    quickSort();
    render(stage1, stage2, stage3);
};

function render (stage1, stage2, stage3){
  quickRender(stage3);
  mergeRender(stage2);
  bubbleSort(stage1);
}
