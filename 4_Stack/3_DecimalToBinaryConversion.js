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

class DecimalToBinaryConversion {
  #stack;
  constructor() {
    this.#stack = new Stack();
  }

  decimalToBinary(num) {
    if (num === 0) return "0";
    let binary = "";
    while (num != 0) {
      this.#stack.push(num % 2);
      num = Math.floor(num / 2);
    }
    while (!this.#stack.isEmpty()) {
      binary += this.#stack.pop();
    }
    return binary;
  }
}

const dtbc = new DecimalToBinaryConversion();
console.log(dtbc.decimalToBinary(2));
console.log(dtbc.decimalToBinary(7));
console.log(dtbc.decimalToBinary(18));
