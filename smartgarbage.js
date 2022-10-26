const smartGarbage = function (trash, bins) {
  if (trash === 'waste') {
    bins.waste += 1;
  } else if (trash === 'recycling') {
    bins.recycling += 1;
  } else if (trash === 'compost') {
    bins.compost += 1;
  }
  return bins;
};

let bins = {
  waste: 0,
  recycling: 0,
  compost: 0
};
smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });