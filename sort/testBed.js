/*
 *1. dataStore (property) = An Array
 *2. numElements (property) = Number of elements in the array
 *3. insert (function) = This function inserts an element into the array
 *4. toString (function) = This function returns a string representation of the array
 *5. clear (function) = This function clears the array
 *6. setData (function) = This function sets the random numbers of the array
 *7. swap (function) = This function swaps two elements
 */

class CArray {
  constructor(numElements) {
    this.dataStore = [];
    this.numElements = numElements;
  }

  insert(element) {
    this.dataStore.push(element);
  }

  toString() {
    let str = "";
    for (let i = 0; i < this.dataStore.length; i++) {
      str += this.dataStore[i] + " ";
      if (i > 0 && i % 10 === 0) {
        str += "\n";
      }
    }
    return str;
  }

  clear() {
    for (let i = 0; i < this.dataStore.length; i++) {
      this.dataStore[i] = 0;
    }
  }

  setData() {
    for (let i = 0; i < this.numElements; i++) {
      this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
  }

  swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
}

let a = new CArray(100);
a.setData();
console.log(a.toString());
