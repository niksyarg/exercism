export const format = (name, number) => {
  let suffix = "th";
  const lastTwoDigits = number % 100;
  const lastDigit = number % 10;

  if (lastTwoDigits < 11 || lastTwoDigits > 13) {
    if (lastDigit === 1) suffix = "st";
    else if (lastDigit === 2) suffix = "nd";
    else if (lastDigit === 3) suffix = "rd";
  }

  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
};
