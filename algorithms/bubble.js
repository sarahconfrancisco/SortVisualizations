class BubbleSort {
	constructor(array, stage, interval = 60){
		this.stage = stage;
		this.array = array;
		this.interval = interval;
		this.arraysToRender = [];
		this.tick = this.tick.bind(this);
		this.length = array.length;
		this.n = this.length + 1;
		this.clock = 0;
	}

	sort(){
		let sorted = false;
		this.arraysToRender.push([bubbleArray.slice(), null, null])
		this.whileLoop(sorted);
	}

	whileLoop(sorted){
	  this.n -= 1;
	  if(sorted){
	    return null;
	  }

	  sorted = true;
	  this.forLoop(0, sorted);
	}

	forLoop(i, sorted){
	  this.arraysToRender.push([this.array.slice(), i, i + 1]);
	  if(this.array[i] > this.array[i + 1]){
	    this.swap(i, i + 1);
	    sorted = false;
	  }
	  if(i === n - 2){
	    this.whileLoop(sorted);
	  } else {
	    this.forLoop(i + 1, sorted);
	  }
	}

	swap(i, j){
	   let temp = this.array[i];
	   this.array[i] = this.array[j];
	   this.array[j] = temp;
	}

	tick(){
		this.clock += 1;
		if(this.clock % this.interval === 0){
			let step = this.arraysToRender.shift();
			this.renderMainArray(step);
		}
	}

	renderMainArray(step){
		let arr = step[0]
		let current = step[1];
		let next = step[2];
		let x = 100;
		this.stage.removeAllChildren();
		arr.forEach((num, idx) => {
			let color = 'black';
			if(idx === current){ color = 'red'}
			if(idx === next) { color = 'blue'}
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
