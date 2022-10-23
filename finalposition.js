const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']
let x = 0;
let y = 0;
const finalPosition = function (moves) {
  //loop to iterate all items in the array
  let finalpos = [];
  for (let move of moves) {
    if (move === 'north') {
      y += 1; 
    } else if (move === 'south') {
      y -= 1; 
    } else if (move === 'east') {
      x = x + 1; 
    } else if (move === 'west') {
      x = x - 1; 
    }
  }
  finalpos.push(x);
  finalpos.push(y);
  return finalpos;
}
console.log(finalPosition(moves));