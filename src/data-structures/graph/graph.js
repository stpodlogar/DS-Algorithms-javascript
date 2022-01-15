// Example layout of Cyclic Undirected Graph

//      2 ------ 0
//    /   \
//   1 --- 3

// Three ways data can be stored for graphs

// Edge List ---> Each index value holds an array of vertex connections
const graph = [[0, 2], [2, 3], [2, 1], [1, 3]]

// Adjacent List ---> Each index represents a vertex and contains an array of the vertices its connected to
const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]]

// Adjacent Matrix ---> A matrix with (0, 1) (false, true) values to represent connections between vertices
const graph3 = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
]

// Simple Implementation of Adjacent List Undirected
class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }

    addEdge(node1, node2) {
        // Undirected Graph
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }

    // Helper function to show if graph is working correctly
    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + " ---> " + connections);
        }
    }
}