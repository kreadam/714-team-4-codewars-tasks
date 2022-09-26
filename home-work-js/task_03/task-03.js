https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius
}

https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj){
  const five = [];
  for (var key in obj){
    if(key.length === 5) five.push(key);
    if((obj[key]).length === 5) five.push(obj[key]);
    }
    return five;
  }

https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
function buildFun(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(function () {
      return i;
    });
  }
  return res;
}

