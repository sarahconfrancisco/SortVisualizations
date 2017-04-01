class QuickSort extends Sort {
	sort(){
		this.arraysToRender.push([this.array.slice(), null, null, null]);
		this.quickSortByIndex(0, this.length);
	}

	quickSortByIndex(left_i, right_i){
	  let pivot;
	  if(left_i < right_i){
	    let partition = this.partitionByIndex(left_i, right_i);


	   this.quickSortByIndex(left_i, partition - 1);
	   this.quickSortByIndex(partition + 1, right_i);
	  }
	  return this.array;
	}

	partitionByIndex(left_i, right_i){
	   let pivotValue = this.array[left_i],
	       partitionIndex = left_i + 1, pivot = left_i;

	   for(let i = left_i + 1; i <= right_i; i++){
	    this.arraysToRender.push([this.array.slice(), pivot, partitionIndex, i]);
	    if(this.array[i] < pivotValue){
	      this.swap(i, partitionIndex);
	      this.arraysToRender.push([this.array.slice(), pivot, i, partitionIndex]);
	      partitionIndex++;
	    }
	  }
	  this.swap(pivot, partitionIndex - 1);
	  this.arraysToRender.push([this.array.slice(), partitionIndex - 1, pivot, pivot]);
	  return partitionIndex - 1;
	}

	render(step){
		let quickArr = step[0];
	  let pivot = step[1];
	  let partition = step[2];
	  let current = step[3];
	  let x = 25;
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
}
