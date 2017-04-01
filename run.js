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
      new_l = 20;
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
		const bubble = new BubbleSort(ARRAY.slice(), stage1);
    const merge = new MergeSort(ARRAY.slice(), stage2);
		const quick = new QuickSort(ARRAY.slice(), stage3);
		bubble.sort();
		merge.splitByIndex(0, new_l - 1);
		quick.quickSortByIndex(0, new_l);
		createjs.Ticker.addEventListener('tick', bubble.tick);
		createjs.Ticker.addEventListener('tick', merge.tick);
		createjs.Ticker.addEventListener('tick', quick.tick);
};
