class Stack {
  #stack;
  #capacity;
  #top;

  constructor(capacity) {
    this.#stack = new Array(capacity);
    this.#capacity = capacity;
    this.#top = -1;
  }

  push(value) {
    if (this.isFull()) {
      throw new Error("Stack overflow.");
    }
    this.#stack[++this.#top] = value;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack underflow.");
    }
    return this.#stack[this.#top--];
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack underflow.");
    }
    return this.#stack[this.#top];
  }

  isFull() {
    return this.#top === this.#capacity - 1;
  }

  isEmpty() {
    return this.#top === -1;
  }
}

class ReverseString {
  reverseString(str) {
    const stack = new Stack(str.length);
    for (const ch of str) {
      stack.push(ch);
    }
    let charArray = []; // this works better when large strings needs to be reversed
    while (!stack.isEmpty()) {
      charArray.push(stack.pop());
    }
    return charArray.join("");
  }
}

const rs = new ReverseString();
console.log(rs.reverseString("Hello, World!"));
console.log(rs.reverseString("OpenAI"));
console.log(rs.reverseString("Stacks are fun!"));
