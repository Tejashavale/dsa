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

    searchData(data) {
        let count = this.countNodes();
        if (count === 0) {
            console.log("List is empty");
            return;
        }
        let ind = 0;
        let temp = this.head;
        while (ind < count) {
            if (temp.data === data) {
                console.log(`${data} found at index: ${ind}`)
                return;
            }
            temp = temp.next;
            ind++;
        }
        console.log(`${data} not found.`);
    }

    reverseList() {
        let prev = null;
        let curr = this.head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    hasCycleUsingMap() {
        let map = new Map();
        let temp = this.head;
        while (temp) {
            if (map.has(temp)) return true;
            map.set(temp);
            temp = temp.next;
        }
        return false;
    };

    hasCycleOptimal() {
        let slow = this.head, fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (fast == slow) return true;
        }
        return false;
    }

    startingPointOfLoop() {
        let slow = this.head, fast = this.head;
        let cyclePresent = false;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                cyclePresent = true;
                break;
            }
        }
        if (cyclePresent) {
            let fast = this.head;
            while (slow) {
                if (slow == fast) return slow;
                slow = slow.next;
                fast = fast.next;
            }
        }
        return null;
    };

    middleOfLinkedList() {
        /*
        Given the head of a singly linked list, return the middle node of the linked list.
        If there are two middle nodes, return the second middle node.
        */
        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    isPalindrome() {
        if (!this.head || !this.head.next) return true;

        // Find mid
        let slow = this.head;
        let fast = this.head;

        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let mid = slow;

        // Reverse 2nd half
        let prev = null;
        fast = mid.next;

        while (fast) {
            let next = fast.next;
            fast.next = prev;
            prev = fast;
            fast = next;
        }
        mid.next = prev;

        // Check palindrome
        fast = prev;
        slow = this.head;
        let isListPalindrome = true;
        while (fast) {
            if (slow.data !== fast.data) isListPalindrome = false;
            slow = slow.next;
            fast = fast.next;
        }

        // Reverse 2nd half again
        prev = null;
        fast = mid.next;

        while (fast) {
            let next = fast.next;
            fast.next = prev;
            prev = fast;
            fast = next;
        }
        mid.next = prev;

        return isListPalindrome;
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
ll.searchData(12);
ll.searchData(70);
ll.displayLinkedList();
ll.reverseList();
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
ll.middleOfLinkedList();
console.log("isPalindrome: ", ll.isPalindrome());
ll.displayLinkedList();
