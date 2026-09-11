export const isArmstrongNumber = (number) => {
  // 1. Переводим число в строку, чтобы легко посчитать цифры
  const digitsStr = String(number);
  
  // 2. Узнаем количество цифр (это будет наша степень)
  const power = digitsStr.length;
  
  // 3. Создаем переменную для суммы, используя тип BigInt для точности
  let sum = BigInt(0);
  
  // 4. Проходим по каждой цифре числа
  for (const digit of digitsStr) {
    // Возводим цифру в степень и прибавляем к общей сумме
    sum += BigInt(digit) ** BigInt(power);
  }
  
  // 5. Сравниваем полученную сумму с исходным числом
  return sum === BigInt(number);
};
