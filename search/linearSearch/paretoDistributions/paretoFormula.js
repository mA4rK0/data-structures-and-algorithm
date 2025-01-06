function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function linSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target && i > arr.length * 0.2) {
      swap(arr, i, 0);
      return true;
    } else if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

let numbers = [3, 6, 2, 7, 9, 1, 11, 24, 35];
console.log(numbers);
linSearch(numbers, 2);
console.log(numbers);
