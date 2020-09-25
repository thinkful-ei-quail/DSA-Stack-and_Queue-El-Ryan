/* eslint-disable no-console */
// * 1. Create a stack class

class Stack {
  constructor() {
    this.array = [];
  }

  push(value) {
    this.array.push(value);
  }

  pop() {
    return this.array.pop();
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  display() {
    return this.array[0];
  }

  isEmpty() {
    if (this.array.length === 0) {
      return true;
    }
    return false;
  }
}

const starTrek = new Stack();

console.log(starTrek.array);

starTrek.push('Kirk');
console.log(starTrek.array);
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');
console.log(starTrek.array);

// Remove McCoy - must remove Scotty first
starTrek.pop();
console.log(starTrek.array); // [ 'Kirk', 'Spock', 'McCoy' ]
starTrek.pop();
console.log(starTrek.array); // [ 'Kirk', 'Spock' ]

//* 2. Useful methods for a stack

console.log(starTrek.peek());
console.log(starTrek.isEmpty()); // false

const emptyStack = new Stack();
console.log(emptyStack.isEmpty()); // true

console.log(starTrek.display());
