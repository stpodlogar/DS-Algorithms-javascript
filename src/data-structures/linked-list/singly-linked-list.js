// basic structure of a singly-linked list

// 10 ---> 5 ---> 16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }


// Implementation
class Node {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}
  
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        // check params
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = new Node(value);
        const leader = this.lookup(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this;
    }

    lookup(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index) {
        const leader = this.lookup(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this;
    }

    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        // initialize pointers
        let prev = null;
        let curr = this.head;
        let nextTemp = null;

        // loop until curr === null
        while (curr != null) {
            nextTemp = curr.next; 
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        return prev;
    }
}