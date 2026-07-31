export const solve = (puzzle) => {

  const words = puzzle.match(/[A-Z]+/g);
  if (!words) return null;


  const uniqueLetters = [...new Set(words.join(''))];
  

  const leadingLetters = new Set(words.map(word => word[0]));


  const letterToDigit = new Array(uniqueLetters.length).fill(-1);
  
  const usedDigits = new Array(10).fill(false);


  const isValid = () => {
   
    const map = {};
    uniqueLetters.forEach((letter, index) => {
      map[letter] = letterToDigit[index];
    });

    const numbers = words.map(word => {
      let numStr = '';
      for (let char of word) {
        numStr += map[char];
      }
      return parseInt(numStr, 10);
    });

 
    const sumOfAddends = numbers.slice(0, -1).reduce((sum, val) => sum + val, 0);
    const result = numbers[numbers.length - 1];

    return sumOfAddends === result;
  };


  const backtrack = (index) => {
   
    if (index === uniqueLetters.length) {
      return isValid();
    }

    const currentLetter = uniqueLetters[index];


    for (let digit = 0; digit <= 9; digit++) {
      if (!usedDigits[digit]) {
      
        if (digit === 0 && leadingLetters.has(currentLetter)) {
          continue; 
        }


        letterToDigit[index] = digit;
        usedDigits[digit] = true;

   
        if (backtrack(index + 1)) {
          return true;
        }

        
        letterToDigit[index] = -1;
        usedDigits[digit] = false;
      }
    }

    return false;
  };


  if (backtrack(0)) {
 
    const resultObj = {};
    uniqueLetters.forEach((letter, index) => {
      resultObj[letter] = letterToDigit[index];
    });
    return resultObj;
  }

  return null; 
};
