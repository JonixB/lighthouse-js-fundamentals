const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  let goodStations = [];
  //good station rule, they have to have a capacity of 20 or more
  //they also need to either be school or community centre
  for (let station of stations) {
    //test capacity first
    if (station[1] >= 20) {
      //test if the building type is community centre or school
      if ((station[2] === 'school') || (station[2] === 'community centre')) {
        //add the station name to the good stationsarray
        goodStations.push(station[0]);
      }
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));