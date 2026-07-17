export const score = (dice, category) => {

  const sum = dice.reduce((a, b) => a + b, 0);
  const counts = {};
  dice.forEach(num => counts[num] = (counts[num] || 0) + 1);
  const values = Object.values(counts);


  const singleCategoryScore = (target) => {
    return dice.filter(d => d === target).length * target;
  };

  switch (category) {
    case 'ones':   return singleCategoryScore(1);
    case 'twos':   return singleCategoryScore(2);
    case 'threes': return singleCategoryScore(3);
    case 'fours':  return singleCategoryScore(4);
    case 'fives':  return singleCategoryScore(5);
    case 'sixes':  return singleCategoryScore(6);

    case 'full house':

      return (values.includes(3) && values.includes(2)) ? sum : 0;

    case 'four of a kind':

      const fourOfAKindTarget = Object.keys(counts).find(key => counts[key] >= 4);
      return fourOfAKindTarget ? Number(fourOfAKindTarget) * 4 : 0;

    case 'little straight':
 
      const isLittleStraight = dice.slice().sort().join('') === '12345';
      return isLittleStraight ? 30 : 0;

    case 'big straight':

      const isBigStraight = dice.slice().sort().join('') === '23456';
      return isBigStraight ? 30 : 0;

    case 'choice':
  
      return sum;

    case 'yacht':
 
      return values.includes(5) ? 50 : 0;

    default:
      return 0;
  }
};
