/*
 *1. linSearch (function) = linear search algorithm
 *2. findMin (function) = find the minimum value in an array
 *3. findMax (function) = find the maximum value in an array
 */

function linSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

let arr = [];
for (let i = 0; i < 11; i++) {
  arr[i] = Math.floor(Math.random() * 11);
}

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(arr);
let num = 2;
let position = linSearch(arr, num);
if (position > -1) {
  console.log(`${num} found at position ${position}`);
} else {
  console.log(`${num} not found`);
}
console.log(findMin(arr));
console.log(findMax(arr));
