function merge(arr1, arr2) {
  let concatenated = [];
  for (let x = 0; x < arr1.length; x++) {
    concatenated.push(arr1[x]);
  }
  for (let x = 0; x < arr2.length; x++) {
    concatenated.push(arr2[x]);
  }
 
  let temp = 0;
  for (let x = 0; x < concatenated.length; x++) {
    for (let y = x; y < (concatenated.length - 1); y++) {
      if (concatenated[x] > concatenated[y + 1]) {
        temp = concatenated[x];
        concatenated[x] = concatenated[y +1];
        concatenated[y + 1] = temp;
      }
    }
  }
  return concatenated;
}

console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);