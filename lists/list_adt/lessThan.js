class List {
  constructor() {
    this.pos = 0;
    this.dataStore = [];
  }

  clear() {
    this.dataStore = [];
    this.pos = 0;
  }

  find(element) {
    for (let i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] === element) {
        return i;
      }
    }
    return -1;
  }

  toString() {
    return this.dataStore.toString();
  }

  insert(element, after) {
    let insertPos = this.find(after);
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element);
      return true;
    }
    return false;
  }

  append(element) {
    this.dataStore.push(element);
  }

  remove(element) {
    let foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      return true;
    }
    return false;
  }

  front() {
    this.pos = 0;
  }

  end() {
    this.pos = this.dataStore.length - 1;
  }

  prev() {
    if (this.pos > 0) {
      --this.pos;
    }
  }

  next() {
    if (this.pos < this.dataStore.length - 1) {
      ++this.pos;
    }
  }

  currPos() {
    return this.pos;
  }

  length() {
    return this.dataStore.length;
  }

  moveTo(position) {
    if (position >= 0 && position < this.dataStore.length) {
      this.pos = position;
    } else {
      throw new RangeError("Position out of range.");
    }
  }

  getElement() {
    return this.dataStore[this.pos];
  }

  contains(element) {
    for (let i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] === element) {
        return true;
      }
    }
    return false;
  }

  traverse(list) {
    for (let i = 0; i < list.dataStore.length; i++) {
      return this.dataStore[i];
    }
  }

  traverseBackwards(list) {
    for (let i = list.dataStore.length - 1; i >= 0; i--) {
      return this.dataStore[i];
    }
  }
}

let arr = new List();
function lessThanNum(element) {
  let current = arr.getElement() || 0;
  if (element < current) {
    arr.remove(current);
    arr.append(element);
    console.log(`current element = ${arr.getElement()}. Because ${element} is less than ${current}`);
  } else {
    console.log(`current element = ${current}. Because ${element} is not less than ${current}`);
  }
}

let alphabet = new List();
function lessThanAlphabet(element) {
  element = element.toLowerCase();
  let current = alphabet.getElement() || "a";
  if (element < current) {
    alphabet.remove(current);
    alphabet.append(element);
    console.log(`current element = ${alphabet.getElement()}. Because ${element} is lower than ${current}`);
  } else {
    console.log(`current element = ${current}. Because ${element} is not lower than ${current}`);
  }
}

lessThanNum(5);
lessThanNum(10);
lessThanNum(-3);
lessThanNum(2);
console.log("\n");
lessThanAlphabet("b");
lessThanAlphabet("A");
