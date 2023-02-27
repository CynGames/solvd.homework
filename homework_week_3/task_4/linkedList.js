// Task 4: Linked List Cycle

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Adds an element to the end of the linked list.
    add(element) {
        const newNode = { value: element, next: null };

        if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
    }

    // Finds the first occurrence of the specified element in the linked list and returns it.
    find(element) {
        let currNode = this.head;

        while (currNode) {
            if (currNode.value === element) {
                return currNode;
            }

            currNode = currNode.next;
        }

        return null;
    }

    // Removes the first occurrence of the specified element from the linked list.
    remove(element) {
        let node = this.find(element);

        if (node) {
            if (node === this.head) {
                this.head = node.next;

                if (this.head === null) this.tail = null;

            } else {
                let prevNode = this.head;

                while (prevNode.next !== node) {
                    prevNode = prevNode.next;
                }

                prevNode.next = node.next;

                if (node === this.tail) {
                    this.tail = prevNode;
                }
            }

            return node.value;
        }

        return null;
    }


    // Floyd loop checker algorithm.
    hasLoop() {
        if (!this.head) {
            return false;
        }

        let slowNode = this.head;
        let fastNode = this.head;

        while (fastNode && fastNode.next) {
            slowNode = slowNode.next;
            fastNode = fastNode.next.next;

            if (slowNode === fastNode) {
                return true;
            }
        }

        return false;
    }
}


const list = new LinkedList();
list.add(12);
list.add(23);
list.add(34);
list.add(45);

console.log(list.find(12)); // Finds the requested value
console.log(list.remove(12)); // Removes the requested value
console.log(list.find(12)); // Fails to find the requested value

console.log(list.hasLoop()); // Should output false

list.tail.next = list.head; // creates a loop

console.log(list.hasLoop()); // Should output true


