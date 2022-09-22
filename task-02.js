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
