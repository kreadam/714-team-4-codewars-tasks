// 1.Make negative https://www.codewars.com/kata/55685cd7ad70877c23000102

function makeNegative(num) {
  if (num <= 0) {
    return num;
  } else {
    return num * -1;
  }
}

// 2.Messi Goals https://www.codewars.com/kata/55f73be6e12baaa5900000d4

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// 3.Game Move https://www.codewars.com/kata/563a631f7cbbc236cf0000c2

function move(position, roll) {
  return position + 2 * roll;
}

// 4.Personalized Message https://www.codewars.com/kata/5772da22b89313a4d50012f7

function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

// 5.Keep Hydrated https://www.codewars.com/kata/582cb0224e56e068d800003c

function litres(time) {
  if (time < 1) {
    return 0;
  } else {
    return Math.floor(time * 0.5);
  }
}

// 6.Opposites Attract https://www.codewars.com/kata/555086d53eac039a2a000083

function lovefunc(flower1, flower2) {
  if (
    (flower1 % 2 === 0 && flower2 % 2 === 1) ||
    (flower1 % 2 === 1 && flower2 % 2 === 0)
  ) {
    return true;
  } else {
    return false;
  }
}
