# Merge Sort

*Merge sort*, also referred to as *mergesort*, is an efficient, general-purpose, comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the implementation preserves the input order of equal elements in the sorted output. Mergesort is a divide and conquer algorithm that was invented by John von Neumann in 1945.

Merge sort works by first dividing the list into the smallest unit (1 element), then comparing each element with the adjacent list to sort and merge the two adjacent lists. Finally all the elements are sorted and merged.

![Merge Sort GIF](../../../../assets/mergesort.gif)

A visual example of Merge sort. Recursive merge sort algorithm used to sort an array of 7 integer values. These are the steps a human would take to emulate merge sort (top-down).

![Merge Sort](../../../../assets/merge-sort.svg)

## Complexities

### Time Complexity

- Best: `O(n log(n))`
- Average: `O(n log(n))`
- Worst: `O(n log(n))`

### Space Complexity

- Memory: `O(n)`
- Stable: `Yes`