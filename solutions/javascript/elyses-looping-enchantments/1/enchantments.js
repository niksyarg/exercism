export function cardTypeCheck(stack, card) {
  let count = 0;
  
  stack.forEach((currentCard) => {
    if (currentCard === card) {
      count++;
    }
  });
  
  return count;
}

export function determineOddEvenCards(stack, type) {
  let count = 0;
  
  for (const card of stack) {
    if (type) {
      // Если type === true, считаем четные
      if (card % 2 === 0) {
        count++;
      }
    } else {
      // Если type === false, считаем нечетные
      if (card % 2 !== 0) {
        count++;
      }
    }
  }
  
  return count;
}
