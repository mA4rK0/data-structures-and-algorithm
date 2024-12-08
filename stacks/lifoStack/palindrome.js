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

function palindrome(str) {
  let a = new Stack();
  for (let i = 0; i < str.length; i++) {
    a.push(str[i]);
  }
  let rword = "";
  while (a.length() > 0) {
    rword += a.pop();
  }
  if (rword === str) {
    console.log(str + " is a palindrome.");
  } else {
    console.log(str + " is not a palindrome.");
  }
}

palindrome("racecar");
palindrome("hello");
