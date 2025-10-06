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

  isEmpty() {
    return this.#top === null;
  }
}

const parenthesesMap = new Map();
parenthesesMap.set(")", "(");
parenthesesMap.set("]", "[");
parenthesesMap.set("}", "{");

class BalancedParentheses {
  isValid(str) {
    const stack = new Stack();
    for (const ch of str) {
      if (parenthesesMap.has(ch)) {
        if (stack.isEmpty()) {
          return false;
        }
        const poppedValue = stack.pop();
        if (parenthesesMap.get(ch) !== poppedValue) {
          return false;
        }
      } else {
        stack.push(ch);
      }
    }
    return stack.isEmpty();
  }
}

const balancedParentheses = new BalancedParentheses();
console.log(balancedParentheses.isValid("{[()]}"));
console.log(balancedParentheses.isValid("{[}]"));
console.log(balancedParentheses.isValid("[[()]"));
