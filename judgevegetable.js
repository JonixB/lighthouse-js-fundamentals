const judgeVegetable = function (vegetables, metric) {
  let highest = 0;
  let submitter = '';

  //you can pass variable names using bracket notations-- this will use the variable value instead
  vegetables.forEach(function(elements){
    if (elements[metric] > highest) {
      highest = elements[metric];
      submitter = elements.submitter;
    }
  });
  return submitter;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));
