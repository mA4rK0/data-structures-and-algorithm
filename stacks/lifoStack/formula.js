class Stack {
  constructor() {
    this.dataStore = [];
    this.top = 0;
  }

  push(element) {
    this.dataStore.push(element);
    this.top++;
  }

  pop() {
    if (this.top > 0) {
      this.dataStore.pop();
      this.top--;
    } else {
      return "stack is empty";
    }
  }

  peek() {
    if (this.top > 0) {
      return this.dataStore[this.top - 1];
    } else {
      return "stack is empty";
    }
  }

  clear() {
    this.dataStore = [];
    this.top = 0;
  }

  length() {
    return this.dataStore.length;
  }
}
