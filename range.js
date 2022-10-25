function range(start, end, step) {
  let numArray = [];
  if (start === undefined || end === undefined || step === undefined) {
    return numArray;
  } else {
    if (start >= end) {
      return numArray;
    } else {
      if (step < 1) {
        return numArray;
      } else {
        for (let x = start; x <= end; x = x + step) {
          numArray.push(x);
        }
        return numArray;
      }
    }
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));