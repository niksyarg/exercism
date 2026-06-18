
export function dayRate(ratePerHour) {
 return ratePerHour * 8;
}

export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}


export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const billableDaysPerMonth = 22;
  const numberOfMonths = Math.floor(numDays / billableDaysPerMonth);
  const remainingDays = numDays % billableDaysPerMonth;

  const monthlyRate = billableDaysPerMonth * dayRate(ratePerHour);
  const discountedMonthlyRate = monthlyRate * (1 - discount);
  
  const totalCost = (numberOfMonths * discountedMonthlyRate) + (remainingDays * dayRate(ratePerHour));
  return Math.ceil(totalCost);
}
