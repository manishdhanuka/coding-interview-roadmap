class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  #top;
  constructor() {
    this.#top = null;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.#top;
    this.#top = newNode;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty, no more elements to pop.");
    }
    const poppedValue = this.#top.value;
    this.#top = this.#top.next;
    return poppedValue;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty, no more elements to peek.");
    }
    return this.#top.value;
  }

  isEmpty() {
    return this.#top === null;
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
console.log("Top element:", stack.peek()); // Output: 30

console.log("Popped:", stack.pop()); // Output: 30
console.log("Popped:", stack.pop()); // Output: 20

console.log("Is stack empty?", stack.isEmpty()); // Output: false
stack.pop(); // Popping last element
console.log("Is stack empty?", stack.isEmpty()); // Output: true
