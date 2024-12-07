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
