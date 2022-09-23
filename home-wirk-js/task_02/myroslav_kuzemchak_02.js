var number = function (busStops) {
  let totalPassangers = 0;
  for (let i = 0; i < busStops.lenght; i++) {
    let stop = busStops[i];
    let gotIn = stop[0];
    let gotOff = stop[1];
    totalPassangers += gotIn;
    totalPassangers -= gotOff;
  }
  return totalPassangers;
};

number([
  [10, 0],
  [3, 5],
  [5, 8],
]);
