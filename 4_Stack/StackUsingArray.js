class Stack {
  constructor(capacity) {
    this.capacity = capacity;
    this.stack = new Array(capacity);
    this.top = -1;
  }

  push(value) {
    if (this.top === this.capacity - 1) {
      console.log(`Stack Overflow! Cannot push ${value}.`);
      return;
    } else {
      this.stack[++top] = value;
      console.log(`${value} pushed to stack.`);
    }
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack Underflow! No elements to pop.");
      return -1;
    }
    return this.stack[this.top--];
  }

  peek() {
    if (this.isEmpty()) {
      console.log("No elements to peek.");
      return -1;
    }
    return this.stack[this.top];
  }

  isEmpty() {
    return this.top === -1;
  }
}

const stack = new Stack(5);
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Top element:", stack.peek());
console.log("Popped:", stack.pop());
console.log("Popped:", stack.pop());
console.log("Is stack empty?", stack.isEmpty());
stack.pop(); // Popping last element
console.log("Is stack empty?", stack.isEmpty());
