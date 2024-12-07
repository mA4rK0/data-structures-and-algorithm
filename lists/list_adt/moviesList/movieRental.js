const fs = require("fs");
const readlineSync = require("readline-sync");

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

  traverse() {
    for (this.front(); this.currPos() < this.length(); this.next()) {
      console.log(this.getElement());
    }
  }

  traverseBackwards() {
    for (this.end(); this.currPos() >= 0; this.prev()) {
      console.log(this.getElement());
    }
  }
}

function createArr(file) {
  let arr = fs.readFileSync(file, "utf-8").split("\n");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].trim();
  }
  return arr;
}

class Customer {
  constructor(name, movie) {
    this.name = name;
    this.movie = movie;
  }
}

let movies = createArr("movies.txt");
let movieList = new List();
let customers = new List();
for (let i = 0; i < movies.length; i++) {
  movieList.append(movies[i]);
}

function displayList(list) {
  for (let i = 0; i < list.dataStore.length; i++) {
    const element = list.dataStore[i];
    if (element instanceof Customer) {
      console.log(`${element.name}, ${element.movie}`);
    } else {
      console.log(element);
    }
  }
}

function checkOut(name, movie, filmList, customerList) {
  if (movieList.contains(movie)) {
    let c = new Customer(name, movie);
    customerList.append(c);
    filmList.remove(movie);
  } else {
    console.log(movie + " is not available.");
  }
}

console.log("Available movies: \n");
displayList(movieList);

let name = readlineSync.question("\nEnter your name: ");
let movie = readlineSync.question("What movie would you like? ");

checkOut(name, movie, movieList, customers);

console.log("\nCustomer Rentals: \n");
displayList(customers);

console.log("\nMovies Now Available\n");
displayList(movieList);
