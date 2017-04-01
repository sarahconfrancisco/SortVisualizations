class MergeSort extends Sort {
	splitByIndex(low, high){
		if(high <= low){ return;}
	  let mid = Math.ceil( (low + high) / 2);

		this.arraysToRender.push([this.array.slice(0, low),
															this.array.slice(low, mid),
															this.array.slice(mid, high + 1),
															this.array.slice(high+1, this.length)]);

		this.splitByIndex(low, mid -1);
	  this.splitByIndex(mid, high);

		this.arraysToRender.push([this.array.slice(0, low),
														this.array.slice(low, mid),
														this.array.slice(mid, high + 1),
														this.array.slice(high+1, this.length)]);

		this.mergeByIndex(low, high, mid);

	  this.arraysToRender.push([this.array.slice(0, low),
															this.array.slice(low, mid),
															this.array.slice(mid, high + 1),
															this.array.slice(high+1, this.length)]);
	}

	mergeByIndex(low, high, mid){
   let sort = [];
   let left_i = low;
   let right_i = mid;
	 let idx = 0;
   while(left_i < mid && right_i <= high){
     if(this.array[left_i] < this.array[right_i]){
       sort.push(this.array[left_i]);
			 this.arraysToRender.push([this.array[left_i], 'red', idx]);
			 idx += 1;
       left_i += 1;
     } else {
       sort.push(this.array[right_i]);
			 this.arraysToRender.push([this.array[right_i], 'blue', idx]);
			 idx += 1;
       right_i += 1;
     }
   }
	 let left = this.array.slice(left_i, mid);
	 left.forEach((num, i) => {
		 this.arraysToRender.push([num, 'red', idx])
		 idx += 1;
		});
	 let right = this.array.slice(right_i, high + 1);
	 right.forEach((num, i) => {
			this.arraysToRender.push([num, 'blue', idx])
			idx += 1;
	 });
   let sorted = sort.concat(left.concat(right));
   sorted.forEach((num, i) => {
     this.array[i + low] = num;
	 });
	}

	render(step){
		if(step.length === 4){
			this.renderMainArray(step);
		} else {
			this.renderSortedArray(step);
		}
	}

	renderMainArray(arrs){
		this.stage.removeAllChildren();
		let x = 25;
	  arrs.forEach((arr, i) => {
	    let color = "black";
	    if(i === 1){ color = "red"};
	    if(i === 2){ color = "blue"};
	    if(i !== 0) { x += 25 * arrs[i - 1].length };
	    this.createLines(arr, color, x);
	  })
	}

	renderSortedArray(step){
		let x = 650 + step[2] * 25;
		this.createALine(step[0], step[1], x);
	}

	createLines(arr, color, x){
		arr.forEach((num, i) => {
			this.createALine(num, color, x);
			x += 25
		})
	}
}
