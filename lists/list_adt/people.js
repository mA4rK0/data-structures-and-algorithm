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
      console.log(list.getElement());
    }
  }

  traverseBackwards(list) {
    for (let i = list.dataStore.length - 1; i >= 0; i--) {
      console.log(list.getElement());
    }
  }
}

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

let list = new List();
list.append(new Person("John", "male"));
list.append(new Person("Jane", "female"));
list.append(new Person("Bob", "male"));
list.append(new Person("Sally", "female"));
list.append(new Person("Tom", "male"));
list.append(new Person("Jill", "female"));
list.append(new Person("Sue", "female"));
list.append(new Person("Tim", "male"));
list.append(new Person("Eve", "female"));
list.append(new Person("Sam", "male"));

let maleList = new List();
function isMale() {
  const onlyMale = list.dataStore.filter((person) => person.gender === "male");
  for (let i = 0; i < onlyMale.length; i++) {
    maleList.append(onlyMale[i]);
  }
  console.log("men:\n");
  for (let i = 0; i < maleList.dataStore.length; i++) {
    console.log(maleList.dataStore[i].name);
  }
}

let femaleList = new List();
function isFemale() {
  const onlyFemale = list.dataStore.filter((person) => person.gender === "female");
  for (let i = 0; i < onlyFemale.length; i++) {
    femaleList.append(onlyFemale[i]);
  }
  console.log("\nwomen:\n");
  for (let i = 0; i < femaleList.dataStore.length; i++) {
    console.log(femaleList.dataStore[i].name);
  }
}

isMale();
isFemale();
