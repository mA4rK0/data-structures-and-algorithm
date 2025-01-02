/*
 *1. dataStore (property) = An Array
 *2. numElements (property) = Number of elements in the array
 *3. insert (function) = This function inserts an element into the array
 *4. toString (function) = This function returns a string representation of the array
 *5. clear (function) = This function clears the array
 *6. setData (function) = This function sets the random numbers of the array
 *7. swap (function) = This function swaps two elements
 *8. mergeSort (function) = This function sorts the array with merge sort algorithm
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

  mergeSort() {
    if (this.dataStore.length < 2) {
      return;
    }
    let step = 1;
    let left;
    let right;
    while (step < this.dataStore.length) {
      left = 0;
      right = step;
      while (right + step <= this.dataStore.length) {
        this.mergeArrays(this.dataStore, left, left + step, right, right + step);
        left = right + step;
        right = left + step;
      }
      if (right < this.dataStore.length) {
        this.mergeArrays(this.dataStore, left, left + step, right, this.dataStore.length);
      }
      step *= 2;
    }
    console.log(this.toString());
  }

  mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
    let rightArr = new Array(stopRight - startRight + 1);
    let leftArr = new Array(stopLeft - startLeft + 1);
    let k = startRight;
    for (let i = 0; i < rightArr.length - 1; i++) {
      rightArr[i] = arr[k];
      k++;
    }
    k = startLeft;
    for (let i = 0; i < leftArr.length - 1; i++) {
      leftArr[i] = arr[k];
      k++;
    }

    rightArr[rightArr.length - 1] = Infinity;
    leftArr[leftArr.length - 1] = Infinity;
    let m = 0;
    let n = 0;
    for (let k = startLeft; k < stopRight; k++) {
      if (leftArr[m] <= rightArr[n]) {
        arr[k] = leftArr[m];
        m++;
      } else {
        arr[k] = rightArr[n];
        n++;
      }
    }
    console.log("left array - ", leftArr);
    console.log("right array - ", rightArr);
  }
}

let a = new CArray(10);
a.setData();
console.log(a.toString());
let start = new Date().getTime();
a.mergeSort();
let stop = new Date().getTime();
console.log("Execution time: " + (stop - start) + "ms");
