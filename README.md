<h1 align="center">
  <br>
  JavaScript Data Structures and Algorithms
  <br>
</h1>

<h4 align="center">This GitHub repository contains examples and implementations of commonly used data structures and algorithms, as well as example problems, all written in JavaScript.</h4>

<p align="center">Each data structure and algorithm has its own separate README with further explanations and code.
This repo is used to track my learning through this journey, and hopefully it helps anyone else who comes across it.</p>

<p align="center">
  <a href="#complexity-analysis">Complexity Analysis</a> •
  <a href="#data-structures">Data Structures</a> •
  <a href="#algorithms">Algorithms</a>
</p>

## Complexity Analysis

### Big O Notation

*Big O notation* is used to classify algorithms according to how their run time and/or space requirements grow as the input size grows. More specifically, Big O notation classifies the algorithms based on the **worst-case scenario**.

![Big O Graph](/assets/big-o-graph.png)

Source: [Big-O Cheat Sheet](https://www.bigocheatsheet.com/)

### Data Structure Operation Complexity

| Data Structure          | Access    | Search    | Insertion | Deletion  | Comments  |
| ----------------------- | :-------: | :-------: | :-------: | :-------: | :-------- |
| **Array**               | O(1)      | O(n)      | O(n)      | O(n)      |           |
| **Stack**               | O(n)      | O(n)      | O(1)      | O(1)      |           |
| **Queue**               | O(n)      | O(n)      | O(1)      | O(1)      |           |
| **Linked List**         | O(n)      | O(n)      | O(1)      | O(1)      |           |
| **Hash Table**          | N/A       | O(1)      | O(1)      | O(1)      | Average of O(1) but O(n) is possible in worst case |
| **Binary Search Tree**  | O(n)      | O(n)      | O(n)      | O(n)      | In case of balanced tree costs would be O(log(n)) |

## Data Structures

A data structure is a particular way of organizing data in a computer so that it can be accessed and modified in an efficient manner. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.

- [Linked List](/src/data-structures/linked-list)
- [Stack](/src/data-structures/stack)
- [Queue](/src/data-structures/queue)
- [Hash Table](/src/data-structures/hash-table)
- [Tree](/src/data-structures/tree)
  - [Binary Search Tree](src/data-structures/tree/binary-search-tree)
- [Graph](src/data-structures/graph)

## Algorithms

An algorithm is an unambiguous specification of how to solve a class of problems. It is a set of rules that precisely define a sequence of operations.

- **Sorting**
  - [Bubble Sort](/src/algorithms/sorting/bubble-sort)
  - [Selection Sort](/src/algorithms/sorting/selection-sort)
  - [Insertion Sort](/src/algorithms/sorting/insertion-sort)
  - [Merge Sort](/src/algorithms/sorting/merge-sort)
- **Searches**
  - [Linear Search](/src/algorithms/searches/linear-search)
  - [Binary Search](/src/algorithms/searches/binary-search)