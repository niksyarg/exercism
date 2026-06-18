export function timeToMixJuice(name) {
switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }  
}

export function limesToCut(wedgesNeeded, limes) {
let wedgesCut = 0;
  let limesUsed = 0;

  while (wedgesCut < wedgesNeeded && limesUsed < limes.length) {
    switch (limes[limesUsed]) {
      case 'small':
        wedgesCut += 6;
        break;
      case 'medium':
        wedgesCut += 8;
        break;
      case 'large':
        wedgesCut += 10;
        break;
    }
    limesUsed++;
  }
  return limesUsed;
}

export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0 && orders.length > 0) {
    timeLeft -= timeToMixJuice(orders.shift());
  }
  return orders;
}
