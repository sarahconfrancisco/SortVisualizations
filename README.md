# SortVisualizations
Create a visualization of mergesort, quicksort and bubble sort using vanilla JS, d3 html, and css.
###MVPS
- [ ] Merge Sort
- [ ] Quick Sort
- [ ] Bubble Sort
- [ ] A slider to change how "out of order" the sort is to start
- [ ] A start/restart button
- [ ] A Steps counter
###WireFrames
This project will consist of a single screen with 3 sort visualizers, sliders, and step counters
### Architecture and Technologies
This project will be implemented with the following technologies:

- Vanilla JavaScript and for overall structure and sort logic,
- d3 and Canvas for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be three scripts involved in this project:

`merge.js`: this script will handle the logic of the mergesort. `merge_easel.js` elements pertaining to merge sort and rendering them to the DOM.
`quick.js`: this script will handle the logic of the quicksort. `quick_easel.js` elements pertaining to merge sort and rendering them to the DOM.
`bubble.js`: this script will handle the logic of the bubblesort. `bubble_easel.js` elements pertaining to merge sort and rendering them to the DOM.


### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running and `Easel.js` installed.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all scripts outlined above.  Learn the basics of `Easel.js`.

**Day 2/3**: Learn the `Easel.js` API and the d3 API. Create the sort visualization as well as the sorting scripts.


**Day 4**: Install the sliders for the user to decide how out of order the sorts start and the start button. Style the frontend, making it polished and professional.
