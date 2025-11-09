const { NotImplementedError } = require("../lib/errors");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.item = [];
    if (!this.item) throw new NotImplementedError("Not implemented");
  }

  push(value) {
    this.item.push(value);
    if (!this.item) throw new NotImplementedError("Not implemented");
  }

  pop() {
    if (!this.item) throw new NotImplementedError("Not implemented");
    return this.item.pop();
  }

  peek() {
    if (this.item.length === 0) {
    throw new NotImplementedError("Not implemented");
  }
    return this.item[this.item.length - 1];
}}

module.exports = {
  Stack,
};
