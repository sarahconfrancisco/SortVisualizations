function run(){
    createjs.Ticker.setFPS(60);
    const stage1 = new createjs.Stage("canvas1");
    createjs.Ticker.addEventListener("tick", stage1);
    const stage2 = new createjs.Stage("canvas2");
    createjs.Ticker.addEventListener("tick", stage2);
    const stage3 = new createjs.Stage("canvas3");
    createjs.Ticker.addEventListener("tick", stage3);
    let new_l = document.getElementById("userLength").value;
    if (new_l < 2 || new_l > 20){
      new_l = 10;
    };
    let arrayType;
    ARRAY = [];
    for(let i = 1; i <= new_l; i++ ){ ARRAY.push(i)}
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
