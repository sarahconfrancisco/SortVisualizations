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
		let speed;
    let array = [];
    for(let i = 1; i <= new_l; i++ ){ array.push(i)}
    document.querySelectorAll("input[name=order]").forEach((el) => {
      if(el.checked){
        arrayType = parseInt(el.value);
      }
    });

		document.querySelectorAll("input[name=speed]").forEach((el) => {
			if(el.checked){
				speed = (parseInt(el.value) * 10);
			}
		});
		const pause = document.getElementById('pause');
		const resume = document.getElementById("resume");
		arrayType = arrayType ? arrayType : 3;
		speed = speed ? speed : 30;
		console.log(speed);
    const masterArray = init(arrayType, array);
		const bubble = new BubbleSort(masterArray.slice(), stage1, speed);
    const merge = new MergeSort(masterArray.slice(), stage2, speed);
		const quick = new QuickSort(masterArray.slice(), stage3, speed);
		pause.onclick = () => {
			bubble.pause();
			merge.pause();
			quick.pause();
		}
		resume.onclick = () => {
			bubble.resume();
			merge.resume();
			quick.resume();
		}
		bubble.sort();
		merge.splitByIndex(0, new_l - 1);
		quick.sort();
		createjs.Ticker.addEventListener('tick', bubble.tick);
		createjs.Ticker.addEventListener('tick', merge.tick);
		createjs.Ticker.addEventListener('tick', quick.tick);
};
