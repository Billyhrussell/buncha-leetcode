/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let lowercase = s.toLowerCase();
  let sum = 0;

  let numerals = {
    "i": 1,
    "v": 5,
    "x": 10,
    "l": 50,
    "c": 100,
    "d": 500,
    "m": 1000
  };

  for (let i = 0; i < lowercase.length; i++) {

    // console.log(sum)
    if (lowercase[i] === 'i') {
      if (lowercase[i + 1] === 'v' || lowercase[i + 1] === 'x') {
        sum += -1;
      } else {
        sum += numerals[lowercase[i]];
      }
    } else if (lowercase[i] === 'x') {
      if (lowercase[i + 1] === 'l' || lowercase[i + 1] === 'c') {
        sum += -10;
      } else {
        sum += numerals[lowercase[i]];
      }
    } else if (lowercase[i] === 'c') {
      if (lowercase[i + 1] === 'd' || lowercase[i + 1] === 'm') {
        sum += -100;
      } else {
        sum += numerals[lowercase[i]];
      }
    } else {
      // console.log("in here at ", i);
      sum += numerals[lowercase[i]];
      console.log("TOTSUM", sum);
    }

    console.log("SUM", sum);
  }
 
  return sum;
};


console.log(romanToInt("MCMXCIV"));

// let letters = s.split("");

// let numerals = { "i" : 1,
//                 "v": 5,
//               "x": 10,
//               "l": 50,
//               "c": 100,
//               "d": 500,
//               "m": 1000};

//   for(let letter of letters){
//     if(letters[letter] === "i"){
//       if(letters[letter+1] === 'v'){

//       }else if(letters[letter+1] === 'x'){

//       }
//     }
//   }