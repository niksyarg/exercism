export function getFirstCard(deck) {
const[firstCard] = deck;
  return firstCard;
}

export function getSecondCard(deck) {
const [, secondCard] = deck;
  return secondCard;
}

export function swapTwoCards(deck) {
const [first, second, ...remainingCards] = deck;
  return [second, first, ...remainingCards];
}

export function shiftThreeCardsAround(deck) {
const [first, second, third, ...rest] = deck;
  return [second, third, first, ...rest];
}

export function pickNamedPile(piles) {
  return piles.chosen;
}


export function swapNamedPile(piles) {
  const { chosen, disregarded } = piles;
  return { chosen: disregarded , disregarded : chosen };
}

