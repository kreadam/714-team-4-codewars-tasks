// Find the smallest integer in the array

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min = args[0];
    for (let i = 1; i <= args.length; i++) {
      if (args[i] < min) min = args[i];
    }
    return min;
  }
}

// Geometry Basics: Circle Circumference in 2D

function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}

// Training JS #12: loop statement --for..in and for..of

function giveMeFive(obj) {
  let keysAndValuesGiveFive = [];
  for (let key in obj) {
    if (key.length === 5) {
      keysAndValuesGiveFive.push(key);
    }
    if (obj[key].length === 5) {
      keysAndValuesGiveFive.push(obj[key]);
    }
  }
  return keysAndValuesGiveFive;
}

// name

function buildFun(n) {
  var res = [];

  for (var i = 0; i < n; i++) {
    function pack(i) {
      res.push(function () {
        console.log(i);
      });
    }
  }
  return res;
}
