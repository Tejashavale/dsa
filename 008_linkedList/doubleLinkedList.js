class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNodeAtStart(data) {
        let newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    addNodeAtEnd(data) {
        let newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    displayLinkedList() {
        let temp = this.head;
        // console.log(this.head);
        let output = "";
        while (temp) {
            output += `${temp.data} `;
            temp = temp.next;
        }
        console.log("Double linked list: ", output);
    }

    removeHead() {
        // If list is empty
        if (!this.head) {
            console.log("List is empty.");
            return;
        }

        // If list contains only one node
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
            return;
        }

        let newHead = this.head.next;
        newHead.prev = null;
        this.head = newHead;
    }

    removeTail() {
        // If list is empty
        if (!this.head) {
            console.log("List is empty.");
            return;
        }

        // If list contains only one node
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
            return;
        }

        let newTail = this.tail.prev;
        newTail.next = null;
        this.tail = newTail;
    }
}

dll = new DoubleLinkedList();
dll.addNodeAtStart(10);
dll.addNodeAtStart(8);
dll.addNodeAtEnd(12);
dll.addNodeAtEnd(14);
dll.addNodeAtEnd(16);
dll.displayLinkedList();

dll.removeHead();
dll.displayLinkedList();
dll.removeHead();
dll.displayLinkedList();
dll.removeTail();
dll.displayLinkedList();
