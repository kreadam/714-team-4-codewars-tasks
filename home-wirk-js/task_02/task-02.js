https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string){
  const words = [""];
  for (let i = 0, j = 0; i < string.length; i++) {
    if(string[i] === " ") {
      j++;
      words.push("");
    } else {
      words[j] += string[i];
    }
  }
  return words
}

https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  let rna = "";
  for (let i = 0; i < dna.length; i++){
    if(dna[i] === "T") {
      rna += "U";
    } else {
      rna += dna[i];
    }
  }
  return rna
}

https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function(list){
    let min = list[0];
    for (let i = 0; i < list.length; i++){
      if(list[i] < min){
        min = list[i];
      }
    }
    return min;
}

var max = function(list){
    let max = list[0];
    for (let i = 0; i < list.length; i++){
      if(list[i] > max){
        max = list[i];
      }
    }
    return max;
}
  
https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  let minValue = arr[0];
  let minIndex = 0;
  for(let i = 0; i < arr.length; i++) {
      if(arr[i] < minValue){
        minValue = arr[i];
        minIndex = i;
    }
  }
  if(toReturn === "value") {
    return minValue
  }
  return minIndex
}

Поглиблені задачки
https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
  for (let i = 0; i < queue.length; i++){
    if(queue[i] === "wolf") {
      if(i === queue.length - 1) {
        return "Pls go away and stop eating my sheep"
      }
      return "Oi! Sheep number " + (queue.length - i - 1) + "! You are about to be eaten by a wolf!"
    }
  }
}

https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
function maps(x){
  let y =[];
  for(let i = 0; i < x.length; i++){y[i] = x[i] * 2;}
  return y
}

https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive (arr) {
  for (let i = 0; i < arr.length - 1; i++){
    if (arr[i + 1] !== arr[i] + 1 ){
      return arr[i + 1]
    }
  }
  return null
}
