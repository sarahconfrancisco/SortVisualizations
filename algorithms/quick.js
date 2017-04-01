class QuickSort {
	constructor(quickArray, stage, interval = 60){
		this.stage = stage;
		this.arraysToRender = [];
		this.quickArray = quickArray;
		this.arraysToRender.push([quickArray.slice(), null, null, null]);
		this.interval = interval;
		this.clock = 0;
		this.tick = this.tick.bind(this);
	}

	quickSortByIndex(left_i, right_i){
	  let pivot;
	  if(left_i < right_i){
	    let partition = this.partitionByIndex(left_i, right_i);


	   this.quickSortByIndex(left_i, partition - 1);
	   this.quickSortByIndex(partition + 1, right_i);
	  }
	  return quickArray;
	}

	swap(i, j){
	   let temp = this.quickArray[i];
	   this.quickArray[i] = this.quickArray[j];
	   this.quickArray[j] = temp;
	}

	partitionByIndex(left_i, right_i){
	   let pivotValue = this.quickArray[left_i],
	       partitionIndex = left_i + 1, pivot = left_i;

	   for(let i = left_i + 1; i <= right_i; i++){
	    this.arraysToRender.push([this.quickArray.slice(), pivot, partitionIndex, i]);
	    if(this.quickArray[i] < pivotValue){
	      this.swap(i, partitionIndex);
	      this.arraysToRender.push([this.quickArray.slice(), pivot, i, partitionIndex]);
	      partitionIndex++;
	    }
	  }
	  this.swap(pivot, partitionIndex - 1);
	  this.arraysToRender.push([this.quickArray.slice(), partitionIndex - 1, pivot, pivot]);
	  return partitionIndex - 1;
	}

	tick(){
		this.clock += 1;
		if(this.clock % this.interval === 0){
			let step = this.arraysToRender.shift();
			this.renderMainArray(step);
		}
	}

	renderMainArray(step){
		let quickArr = step[0];
	  let pivot = step[1];
	  let partition = step[2];
	  let current = step[3];
	  let x = 100;
	  this.stage.removeAllChildren();
	  quickArr.forEach((num, i) => {
	    let color = "black";
	    if(i === pivot){ color = "red";}
	    if(i === partition){ color = "blue"; }
	    if( i === current) { color = "yellow";}
	    this.createALine(num, color, x);
	    x += 25;
	  })
	}

	createALine(num, color, x){
		let y_start = 300 - 15 * num;
	  let line = new createjs.Shape();
	  line.graphics.setStrokeStyle(5).beginStroke(color);
	  line.graphics.lineTo(x, y_start);
	  line.graphics.lineTo(x, 300);
	  line.graphics.endStroke();
	  this.stage.addChild(line);
	}
}
