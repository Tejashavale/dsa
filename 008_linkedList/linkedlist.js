class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNodeAtEnd(data) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        let temp = this.head;
        while (temp.next) {
            temp = temp.next
        }
        temp.next = new Node(data);
    }

    addNodeAtStart(data) {
        let temp = this.head;
        this.head = new Node(data);
        this.head.next = temp;
    }

    displayLinkedList() {
        let temp = this.head;
        let output = "";
        while (temp) {
            output += temp.data + " ";
            temp = temp.next;
        }
        console.log("LinkedList: ", output);
        return output;
    }

    countNodes() {
        let temp = this.head;
        let count = 0;
        while (temp) {
            count++;
            temp = temp.next;
        }
        // console.log("countNodes: ", count);
        return count
    }

    addNodeAtIndex(data, index) {
        let count = this.countNodes();
        if (index < 0 || index > count) {
            console.log("Invalid Index: ", index, ", last index is: ", count);
            return;
        }

        if (index === 0) {
            this.addNodeAtStart(data);
            return;
        }

        if (index === count) {
            this.addNodeAtEnd(data);
            return;
        }

        let temp = this.head;
        let currentIndex = 0;

        while (currentIndex < index - 1) {
            temp = temp.next;
            currentIndex++;
        }

        let newNode = new Node(data);
        newNode.next = temp.next;
        temp.next = newNode;
    }

    removeHead() {
        let count = this.countNodes();
        if (count === 0) {
            console.log("List is empty");
            return;
        }
        this.head = this.head.next;
    }

    removeLast() {
        let count = this.countNodes();
        if (count === 0) {
            console.log("List is empty");
            return;
        }
        let index = 0;
        let temp = this.head;
        while (index < count - 2) {
            temp = temp.next;
            index++;
        }
        temp.next = null;
    }

    removeNodeAtIndex(index) {
        let count = this.countNodes();
        if (index < 0 || index >= count) {
            console.error("Invalid index to remove");
            return
        }
        if (index === 0) {
            this.removeHead();
            return;
        }
        if (index === count - 1) {
            this.removeLast();
            return;
        }
        let ind = 0;
        let temp = this.head;
        while (ind < index - 1) {
            temp = temp.next;
            ind++;
        }
        temp.next = temp.next.next;
    }

}

ll = new LinkedList();
ll.addNodeAtEnd(10);
ll.addNodeAtEnd(11);
ll.addNodeAtEnd(13);
ll.addNodeAtEnd(14);
ll.addNodeAtStart(9);
ll.addNodeAtStart(8);
ll.addNodeAtIndex(12, 4);
ll.addNodeAtIndex(7, 0);
ll.addNodeAtIndex(15, ll.countNodes());
console.log("Count: ", ll.countNodes());
ll.displayLinkedList();
ll.removeHead();
ll.removeHead();
ll.removeHead();
ll.removeHead();
ll.displayLinkedList();
ll.removeLast();
ll.displayLinkedList();
ll.removeNodeAtIndex(2);
ll.displayLinkedList();
