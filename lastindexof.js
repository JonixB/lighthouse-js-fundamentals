function lastIndexOf(arr, numtosearch) {
  let index = -1;
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] === numtosearch) {
      index = x;
    }
  }

  //check if the index value did not change from -1
  //if it did not, that means the num was not found on the array
  if (index === -1) {
    return index;
  } else {
    return index;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);