//* BIBO Queue (Both-in, Both-out)

class Deque {
  constructor() {
    this.dataStore = [];
  }

  enqueue(e1, e2) {
    this.dataStore.unshift(e1);
    this.dataStore.push(e2);
  }

  dequeue() {
    return [this.dataStore.shift(), this.dataStore.pop()];
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

  count() {
    return this.dataStore.length;
  }
}

// let arr = new Deque();
// arr.enqueue(1, 2);
// arr.enqueue(3, 4);
// arr.enqueue(5, 6);
// console.log(arr.dataStore);
// console.log(arr.dequeue());
// console.log(arr.dataStore);
