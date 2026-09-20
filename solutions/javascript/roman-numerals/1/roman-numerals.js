export const toRoman = (number) => {
  // Список всех римских знаков и их значений
  const romanMatrix = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];

  let result = '';

  // Проходим по каждому кирпичику из нашего списка
  for (const [value, letter] of romanMatrix) {
    // Пока наше число больше или равно значению кирпичика
    while (number >= value) {
      result += letter; // Добавляем римскую букву в результат
      number -= value;  // Уменьшаем число на эту величину
    }
  }

  return result;
};
