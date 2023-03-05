// Task 3: Implement a queue using two stacks.

// The idea is to use stack_a to store the elements of the queue,
// and stack_b for temporary storage during certain operations.
class Queue {

    constructor() {
        this.stack_a = [];
        this.stack_b = [];
    }

    enqueue(data) {
        // Move all elements from "stack_a" to "stack_b".
        while (this.stack_a.length > 0) {
            this.stack_b.push(this.stack_a.pop());
        }

        // Push the new element to "stack_a".
        this.stack_a.push(data);

        // Move all elements from "stack_b" to "stack_a".
        while (this.stack_b.length > 0) {
            this.stack_a.push(this.stack_b.pop());
        }
    }

    dequeue() {
        if (this.stack_a.length === 0) {
            return null;
        }

        return this.stack_a.pop();
    }

    isEmpty() {
        return this.stack_a.length === 0;
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(123);
queue.enqueue(12345);

console.log(queue.dequeue()); // Should be 1
console.log(queue.dequeue()); // Should be 123
console.log(queue.isEmpty()); // Should be false
console.log(queue.dequeue()); // Should be 12345
console.log(queue.isEmpty()); // Should be true
