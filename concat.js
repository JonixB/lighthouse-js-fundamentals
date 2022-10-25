function concat(arr1, arr2) {
  let concatenated = [];
  for (let x = 0; x < arr1.length; x++) {
    concatenated.push(arr1[x]);
  }
  for (let x = 0; x < arr2.length; x++) {
    concatenated.push(arr2[x]);
  }
  return concatenated;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);