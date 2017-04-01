class BubbleSort extends Sort{
	constructor(array, stage, interval){
		super(array, stage, interval);
		this.n = this.length + 1;
	}

	sort(){
		let sorted = false;
		this.arraysToRender.push([this.array.slice(), null, null])
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

	render(step){
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
}
