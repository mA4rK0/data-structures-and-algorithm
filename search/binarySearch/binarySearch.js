function binSearch(arr, target) {
  let upper = arr.length - 1;
  let lower = 0;
  while (lower <= upper) {
    let mid = Math.floor((lower + upper) / 2);
    console.log(`current midpoint: ${mid}`);
    if (arr[mid] < target) {
      lower = mid + 1;
    } else if (arr[mid] > target) {
      upper = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

function count(arr, target) {
  let count = 0;
  let position = binSearch(arr, target);
  if (position > -1) {
    count++;
    for (let i = position - 1; i > 0; i--) {
      if (arr[i] === target) {
        count++;
      } else {
        break;
      }
    }
    for (let i = position + 1; i < arr.length; i++) {
      if (arr[i] === target) {
        count++;
      } else {
        break;
      }
    }
  }
  return count;
}

let numbers = [];
for (let i = 0; i < 11; i++) {
  numbers[i] = i;
}
numbers.push(11);
numbers.push(11);
numbers.push(11);
numbers.push(11);

console.log(numbers);
console.log(binSearch(numbers, 10));
console.log(count(numbers, 11));
