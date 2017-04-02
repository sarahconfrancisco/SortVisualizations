class Sort {
	constructor(array, stage, interval = 60){
		this.stage = stage;
		this.stage.removeAllChildren();
		this.array = array;
		this.length = array.length;
		this.interval = interval;
		this.arraysToRender = [];
		this.clock = 0;
		this.paused = false;
		this.pause = this.pause.bind(this);
		this.restart = this.restart.bind(this);
		this.tick = this.tick.bind(this);
	}

	pause(){
		this.paused = true;
	}

	restart(){
		this.paused = false;
	}

	swap(i, j){
	   let temp = this.array[i];
	   this.array[i] = this.array[j];
	   this.array[j] = temp;
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

	tick(){
		if(this.paused) {return}
		this.clock += 1;
		if(this.clock % this.interval === 0){
			let step = this.arraysToRender.shift();
			if(step){
				this.render(step);
			}
		}
	}
}
