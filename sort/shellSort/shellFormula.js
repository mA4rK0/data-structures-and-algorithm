/*
    Shell sort algorithm with Knuth sequence
 *1. dataStore (property) = An Array
 *2. numElements (property) = Number of elements in the array
 *3. insert (function) = This function inserts an element into the array
 *4. toString (function) = This function returns a string representation of the array
 *5. clear (function) = This function clears the array
 *6. setData (function) = This function sets the random numbers of the array
 *7. swap (function) = This function swaps two elements
 *8. shellSort (function) = This function sorts the array with shell sort algorithm with Knuth sequence
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

  shellSort() {
    let n = this.dataStore.length;
    let gap = 1;
    while (gap < n / 3) {
      gap = gap * 3 + 1;
    }

    while (gap > 0) {
      for (let i = gap; i < n; i++) {
        let temp = this.dataStore[i];
        let j;
        for (j = i; j >= gap && this.dataStore[j - gap] > temp; j -= gap) {
          this.dataStore[j] = this.dataStore[j - gap];
        }
        this.dataStore[j] = temp;
        console.log(this.toString());
      }
      gap = Math.floor(gap / 3);
    }
  }
}

let a = new CArray(10);
a.setData();
let start = new Date().getTime();
a.shellSort();
let stop = new Date().getTime();
console.log("Execution time: " + (stop - start) + "ms");
