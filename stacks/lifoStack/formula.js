/*
 *1. push (function) = store the element in the top of the stack
 *2. pop (function) = remove the element from the top of the stack
 *3. peek (function) = return the element from the top of the stack
 *4. clear (function) = remove all the elements from the stack
 *5. length (function) = return the number of elements in the stack
 *6. isEmpty (function) = check if the stack is empty
 */

class Stack {
  constructor() {
    this.dataStore = [];
  }

  push(element) {
    this.dataStore.push(element);
  }

  pop() {
    return this.dataStore.length > 0 ? this.dataStore.pop() : "stack is empty";
  }

  peek() {
    return this.dataStore.length > 0 ? this.dataStore[this.dataStore.length - 1] : "stack is empty";
  }

  clear() {
    this.dataStore = [];
  }

  length() {
    return this.dataStore.length;
  }

  isEmpty() {
    return this.dataStore.length === 0;
  }
}
