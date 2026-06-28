export function seeingDouble(deck) {
  return deck.map((card) => card * 2);
}

export function threeOfEachThree(deck) {
 return deck.flatMap((card) => (card === 3 ? [3, 3, 3] : card));

}

export function middleTwo(deck) {
  const middle = deck.length / 2 - 1;
  return deck.slice(middle, middle + 2);
}

export function sandwichTrick(deck) {
  const first = deck.shift();
  const last = deck.pop();
  deck.splice(deck.length / 2, 0, last, first);
  return deck;
}

export function twoIsSpecial(deck) {
  return deck.filter((card) => card === 2);
}


export function perfectlyOrdered(deck) {
  return deck.sort((a, b) => a - b);
}

export function reorder(deck) {
  return deck.reverse();
}
