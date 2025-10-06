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
      this.stack[++this.top] = value;
      //   console.log(`${value} pushed to stack.`);
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

class NextGreaterElement {
  nextLargerElement(arr) {
    const n = arr.length;
    const stack = new Stack(n);
    let res = new Array(n).fill(-1);

    for (let i = n - 1; i >= 0; i--) {
      const currentElement = arr[i];
      while (!stack.isEmpty() && stack.peek() <= currentElement) {
        // pop elements which are smaller than currentElement
        stack.pop();
      }

      if (!stack.isEmpty()) {
        // if stack is not empty, top element is next greater element for current element
        res[i] = stack.peek();
      }

      // if stack is empty, no need to do anything as array is filled with -1 during initialization

      stack.push(currentElement); // push current element which can be a potential next greater element for the rest of the numbers on left
    }

    return res;
  }
}

const nge = new NextGreaterElement();
console.log(nge.nextLargerElement([4, 5, 2, 25]));
console.log(nge.nextLargerElement([13, 7, 6, 12]));
console.log(nge.nextLargerElement([1, 2, 3, 4, 5]));
