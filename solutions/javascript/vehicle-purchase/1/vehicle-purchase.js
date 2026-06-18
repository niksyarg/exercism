
export function needsLicense(kind) {
return kind === 'car' || kind === 'truck';
}

export function chooseVehicle(option1, option2) {
const bestOption = option1 < option2 ? option1 : option2;
  return `${bestOption} is clearly the better choice.`;
}


export function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice * 0.8;
  } else if (age >= 3 && age <= 10) {
    return originalPrice * 0.7;
  } else {
    return originalPrice * 0.5;
  }
}
