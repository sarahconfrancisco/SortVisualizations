# Sort Visualizations

## About
This application is to show the comparative speed and logic of three
popular sorts with arrays. Bubble sort is a solution many naive programmers
begin with. Compare every element to its neighbor and switch
if needed. However that takes a lot of time and with large data sets
becomes unmanageable. Merge sort takes the approach of divide and conquer
by sorting sections of the array one at a time. However this causes
the need for an auxiliary "sorted" array then overrides a section of the array. However this takes up too much
space if you have a lot of elements or elements that take up a lot of space.
In place quick sort can be faster than merge sort - or as slow
as bubble sort - depending on its initial state and pivot choice
but on average it is the same speed as merge sort with out the
need for extra space.

## What It Uses

This application uses vanilla Javascript and DOM manipulation to create the algorithms to sort and render. The application uses Canvas to draw a representation of the state of each array at every step. For bubble sort the user is watching array sort in real time. For merge and quick sort the program sorts the array saving a snapshot of each step to be rendered after it is sorted.


## Sort Logic

### Bubble Sort

```
  Loop from the first element to the second to last element

  Compare the current element to the next element

  Swap the elements if element i > element i + 1

  Loop through the array going to one less element than before because you
  know the last element checked in the previous loop is the largest

  Continue these loops until you can go through the entire array with no swaps
```

### Merge Sort

Split the array in half. Then half again. And then again until you can't anymore.
Then merge.
```
  Split an array in half recursively until you are calling the split function with an array of a single element.

  call merge recursively where you merge an array with its neighbor

  check the first element of each array to know what element comes next

  push that element into the sorted array

  over write the section of the whole original array you called merge on with the sorted auxiliary array.
```

### In Place Quick Sort

This sort uses a partition index to divide and conquer.
```
  call split(0, array.length)

  function split(left, right){
    return out of the function when right < left
    partition the array into two pieces by keeping track of a partitionIndex
    partitionIndex = return value of a sort function
    split(left, partitionIndex - 1)
    split(partitionIndex + 1, right)
    this continually splits the array keeping a buffer element between the pieces
  }

  function sort(left, right){
    pivotIndex = left
    pivotElement = array[left]
    partitionIndex = left + 1
    partitionElement = array[left + 1]
    loop from left + 1 to right
    want to put all elements < pivotElement to the left of the partitionIndex
    all elements >= pivotElement to the right of the partitionIndex
    {  
      compare the current element to the pivotElement
      if current element < pivotElement
        swap the current element with the partitionElement
        increment the partitionIndex
    }

    Now all the elements to the left of the partitionIndex is smaller than the
    pivotElement and all the ones to the right greater than.
    Swap the pivotElement and the partitionIndex - 1
    return the partitionIndex - 1 
  }
```
