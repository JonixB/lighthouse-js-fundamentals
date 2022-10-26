const carPassing = function (cars, speed) {
  let newOb = {
    time: Date.now(),
    speed: speed
  }
  cars.push(newOb);
  return cars;
}
