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

  