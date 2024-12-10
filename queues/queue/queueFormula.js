/*
 *1. enqueue (function) = Adds an element to the end of the queue
 *2. dequeue (function) = Removes an element from the front of the queue
 *3. front (function) = Returns the element at the front of the queue
 *4. back (function) = Returns the element at the back of the queue
 *5. toString (function) = display all the elements in the queue
 *6. clear (function) = remove all the elements from the queue
 *7. isEmpty (function) = check if the queue is empty
 */

class Queue {
  constructor() {
    this.dataStore = [];
  }

  enqueue(element) {
    this.dataStore.push(element);
  }

  dequeue() {
    return this.dataStore.shift();
  }

  front() {
    return this.dataStore[0];
  }

  back() {
    return this.dataStore[this.dataStore.length - 1];
  }

  toString() {
    let str = "";
    for (let i = 0; i < this.dataStore.length; i++) {
      str += this.dataStore[i] + "\n";
    }
    return str;
  }

  clear() {
    this.dataStore = [];
  }

  isEmpty() {
    return this.dataStore.length === 0 ? true : false;
  }
}
