function stringToArray(string){
	return string.split(' ');
}

function DNAtoRNA(dna) {
    let RNA = ''
    for (var i = 0; i < dna.length; i++) {
  RNA += (dna[i] === 'T'? 'U': dna[i]);
    }
    return RNA;
}

var min = function(list){
    let min = list[0];
    for(let i = 1; i < list.length; i++){
      if(list[i] < min){
          min = list[i];
      } 
    }
    return min;
}

var max = function(list){
    let max = list[0];
    for(let i = 1; i < list.length; i++){
      if(list[i] > max){
          max = list[i];
      } 
    }
    return max;
}

function min(arr, toReturn) {
    const min = Math.min(...arr);
    return(toReturn === "value"? min: arr.indexOf(min));
  }

  //поглиблені задачі//
  function warnTheSheep(queue) {
    let indexWolf = queue.reverse().indexOf('wolf');
      return(indexWolf === 0? "Pls go away and stop eating my sheep": "Oi! Sheep number " + indexWolf + "! You are about to be eaten by a wolf!");
      }

      function maps(x){
        return x.map(xItem => xItem * 2);
        }
        
        function firstNonConsecutive(arr) {
        for(let i = 0; i < arr.length - 1; i++) {
          if(arr[i + 1] != arr[i] + 1) {
            return arr[i + 1];
            }
          } 
          return null;
        }     

// додаткові задачі //
function doubleInteger(i) {
  return i * 2;
}


function century(year) {
      return Math.ceil(year / 100);
}


function multiply(a, b) {
  return a * b;
}

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}


function makeNegative(num) {
  return -Math.abs(num);
}

function cockroachSpeed(s) {
  return Math.floor(s * 1000 * 100 / (60 * 60));
}

function otherAngle(a, b) {
  return 180 - a - b;
}

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

function nthEven(n){
  return 2* n - 2;
}


function getRealFloor(n) {
  return (n <= 0? n: n <= 12? n - 1: n - 2);
}

function past(h, m, s){
  return ((h * 60 + m) * 60 + s )* 1000; 
}


function isDivisible(n, x, y) {
  return (n % x === 0 && n % y === 0? true: false); 
}



