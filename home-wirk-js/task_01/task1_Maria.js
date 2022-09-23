function makeNegative(num) {
    if (num <= 0) {
        return num;
    } else {
        return -num;
     }
  }
  
  function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  }
    
  function move (position, roll) {
    return position + roll * 2;
  }
    
  function greet (name, owner) {
    if (name === owner) {
      return "Hello boss";
    } 
    return "Hello guest";
  }
  
  function litres(time) {
     return Math.floor(time/2);
  }
    
  function lovefunc(flower1, flower2){
    return((flower1 + flower2) % 2 === 1? true: false);
  }
