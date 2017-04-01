class Line {
	constructor(stage, value){
		this.stage = stage;
		this.value = value;
		this.y_start = 300;
		this.y_end = 300 - 15 * value;
		this.locations = [];
		this.line = null;
		this.tickInterval = 750;
		this.tick = 0;
	}

	addIndexAndColor(index, color){
		this.locations.push([index, color])
	}

	createLine(){
		this.line = new createjs.Shape();
		this.cmd = this.line.graphics.setStrokeStyle(5).line.beginStroke('black').command;
		let index, color = this.locations.shift(1);
		let x = index * 25 + 100;
		this.line.graphics.lineTo(x, this.y_start);
		this.line.graphics.lineTo(x, this.y_end);
		this.line.graphics.endStroke();
		this.stage.addChild(this.line);
	}

	tick(){
		this.tick += 1;
		if(this.tick == this.tickInterval){
			let step = this.locations.shift(1);
			let index = step[0];
			let color = step[1];
			let x = index * 25 + 100;
			this.cmd.style = color;
			this.line.graphics.moveTo(x, this.y_start);
			this.line.graphics.moveTo(x, this.y_end);
			this.tick = 0;
			this.stage.update();
		}
	}

}
