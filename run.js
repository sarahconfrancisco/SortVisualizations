
    function run(){
      createjs.Ticker.setFPS(60);
      const stage1 = new createjs.Stage("canvas1");
      createjs.Ticker.addEventListener("tick", stage1);
      const stage2 = new createjs.Stage("canvas2");
      createjs.Ticker.addEventListener("tick", stage2);
      const stage3 = new createjs.Stage("canvas3");
      createjs.Ticker.addEventListener("tick", stage3);
      quickArray = ARRAY.slice();
      quickLength = quickArray.length - 1;
      mergeArray = ARRAY.slice();
      bubbleArray = ARRAY.slice();
      m = bubbleArray.length;
      n = m + 1;
      mergeSort();
      quickSort();
      render(stage1, stage2, stage3);
  };

  function render (stage1, stage2, stage3){
    quickRender(stage3);
    mergeRender(stage2);
    bubbleSort(stage1);
  }
