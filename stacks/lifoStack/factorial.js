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

function factorial(n) {
  let s = new Stack();
  while (n > 1) {
    s.push(n--);
  }
  let product = 1;
  while (s.length() > 0) {
    product *= s.pop();
  }
  return product;
}

console.log(factorial(5));
