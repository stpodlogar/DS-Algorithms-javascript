# Selection Sort

*Selection sort* is a sorting algorithm, specifically an in-place comparison sort. It is inefficient on large lists, and generally performs worse than the similar insertion sort. *Selection sort* is noted for its simplicity, and it has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.

It works by iterating through the list and comparing the current minimum to the current index. Once it has ran through the list, it sets the index of minimum to the next available location. It continues this for every item in the list.

![Selection Sort](../../../../assets/selection-sort.gif)

## Complexities

### Time Complexity

- Best: `O(n^2)`
- Average: `O(n^2)`
- Worst: `O(n^2)`

### Space Complexity

- Memory: `O(1)`
- Stable: `No`