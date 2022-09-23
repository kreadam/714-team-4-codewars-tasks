// Convert a string to an array

function stringToArray(string) {
  return string.split(" ");
}

// DNA to RNA Conversion

function DNAtoRNA(dna) {
  let dnaItems = dna.split("");
  for (let i = 0; i < dnaItems.length; i++) {
    let dnaItem = dnaItems[i];
    if (dnaItem === "T") {
      dnaItems.splice(i, 1, "U");
    }
  }
  let rna = dnaItems.join("");
  return rna;
}

// Find Maximum and Minimum Values of a List

var min = function (list) {
  let min = list[0];
  for (let i = 0; i < list.length; i++) {
    if (list[i + 1] < min) {
      min = list[i + 1];
    }
  }

  return min;
};

var max = function (list) {
  let max = list[0];
  for (let i = 0; i < list.length; i++) {
    if (list[i + 1] > max) {
      max = list[i + 1];
    }
  }
  return max;
};

// Smallest value in the array

function min(arr, toReturn) {
  let minValue = arr[0];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < minValue) {
      minValue = arr[i + 1];
      index = i + 1;
    }
  }
  if (toReturn === "value") {
    return minValue;
  } else {
    return index;
  }
}

// A wolf in sheep's clothing

function warnTheSheep(queue) {
  let reversedQueue = queue.reverse();
  if (reversedQueue[0] === "wolf") {
    return "Pls go away and stop eating my sheep";
  } else {
    for (let i = 1; i < reversedQueue.length; i++) {
      if (reversedQueue[i] === "wolf") {
        return (
          "Oi! Sheep number " + i + "! You are about to be eaten by a wolf!"
        );
      }
    }
  }
}

// Begginer - Lost Without a Map

function maps(x) {
  let doubledX = [];
  for (let i = 0; i < x.length; i++) {
    doubledX.push(2 * x[i]);
  }
  return doubledX;
}

// Find the first non-consecutive number

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] != 1) {
      return arr[i + 1];
    }
  }
  return null;
}

// You Can't Code Under Pressure #1

function doubleInteger(i) {
  i = 2 * i;
  return i;
}

// Century from Year

function century(year) {
  return Math.trunc((year - 1) / 100) + 1;
}

// Multiply numbers (retired)

function multiply(a, b) {
  return a * b;
}

// Volume of a Cuboid

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

// Make Negative

function makeNegative(num) {
  if (num < 0) {
    return num;
  } else {
    return -num;
  }
}

// Cockroach Speed

function cockroachSpeed(s) {
  return Math.floor((s * 1000 * 100) / (60 * 60));
}

// Dad and Son (need to optimize execution time)

function twiceAsOld(dadYearsOld, sonYearsOld) {
  if (dadYearsOld / sonYearsOld === 2) {
    return 0;
  } else {
    let dadLivedYears = [];
    let sonLivedYears = [];
    for (let i = dadYearsOld; i > 1; i--) {
      dadLivedYears.push(i - 1);
    }
    for (let j = sonYearsOld; j > 1; j--) {
      sonLivedYears.push(j - 1);
    }
    for (let y = 0; y < sonLivedYears.length; y++) {
      let sonYear = sonLivedYears[y];
      let dadYear = dadLivedYears[y];
      if (sonYear * 2 === dadYear) {
        return dadYearsOld - dadYear;
      }
    }
    for (let i = 1; i < 150; i++) {
      let futureSonYear = sonYearsOld + i;
      let futureDadYear = dadYearsOld + i;
      if (futureSonYear * 2 === futureDadYear) {
        return futureDadYear - dadYearsOld;
      }
    }
  }
}
