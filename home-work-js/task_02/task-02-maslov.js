// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string){
    return array = string.split(" ");
  }

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
    const reg = /T/gi;
    return rna = dna.replace(reg, 'U');
  }

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

  var min = function(list){
    list.sort( (a, b) => a - b );
    return list[0];
}

var max = function(list){
    list.sort( (a, b) => b - a );
    return list[0];
}

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
  const minNum = Math.min(...arr);
  return toReturn === "value" ? minNum : arr.indexOf(minNum);
}

// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

function warnTheSheep(queue) {
  
  function findWolf(animal) {
    return animal === "wolf";
  }
  
  const index = queue.findIndex(findWolf);
  
  if ( index === queue.length - 1 ) {
    return "Pls go away and stop eating my sheep";
  }
  return "Oi! Sheep number " + (queue.length - index - 1) + "! You are about to be eaten by a wolf!";
}

// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript

function maps(x){
  const doubleX = x.slice(0);
  
  for (i = 0; i <= doubleX.length - 1; i++) {
    doubleX[i] *= 2;
  }
  
  return doubleX;
}

// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript

function firstNonConsecutive(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
      return arr[i + 1];
    } 
  }
  return null;
}


// Double Integer    https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript

function doubleInteger(i) {
  i *= 2;
  return i;
}

// Century From Year    https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

function century(year) {
  const century = Math.ceil(year / 100);
  return century;
}
