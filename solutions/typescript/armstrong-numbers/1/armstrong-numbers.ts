export function isArmstrongNumber(number: bigint | number): boolean {
  // Превращаем число в строку, чтобы легко посчитать цифры
  const numberString = String(number);
  
  // Считаем, сколько всего цифр в числе
  const numberOfDigits = numberString.length;

  // Считаем сумму цифр, возведенных в степень
  let sum = BigInt(0);
  for (const digitChar of numberString) {
    const digit = BigInt(digitChar);
    sum += digit ** BigInt(numberOfDigits);
  }

  // Проверяем, совпадает ли сумма с исходным числом
  return sum === BigInt(number);
}
