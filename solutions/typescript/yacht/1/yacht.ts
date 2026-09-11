export const enum Category {
  ONES,
  TWOS,
  THREES,
  FOURS,
  FIVES,
  SIXES,
  FULL_HOUSE,
  FOUR_OF_A_KIND,
  LITTLE_STRAIGHT,
  BIG_STRAIGHT,
  CHOICE,
  YACHT,
}

// Меняем типы параметров с 'unknown' на точные типы для удобства работы
export const score = (dice: number[], category: Category): number => {
  // Считаем, сколько раз выпало каждое число (от 1 до 6)
  const counts: { [key: number]: number } = {};
  for (const die of dice) {
    counts[die] = (counts[die] || 0) + 1;
  }

  // Считаем сумму всех кубиков
  const sumAll = dice.reduce((sum, current) => sum + current, 0);

  // Сортируем кубики по возрастанию для проверки последовательностей (стритов)
  const sortedDice = [...dice].sort((a, b) => a - b);

  switch (category) {
    // Категории от Одиниц до Шестерок
    case Category.ONES:
      return (counts[1] || 0) * 1;
    case Category.TWOS:
      return (counts[2] || 0) * 2;
    case Category.THREES:
      return (counts[3] || 0) * 3;
    case Category.FOURS:
      return (counts[4] || 0) * 4;
    case Category.FIVES:
      return (counts[5] || 0) * 5;
    case Category.SIXES:
      return (counts[6] || 0) * 6;

    // Фулл-хаус: три кубика одного достоинства и два другого
    case Category.FULL_HOUSE: {
      const values = Object.values(counts);
      if (values.includes(3) && values.includes(2)) {
        return sumAll;
      }
      return 0;
    }

    // Каре: минимум четыре одинаковых кубика
    case Category.FOUR_OF_A_KIND: {
      for (const numStr in counts) {
        if (counts[numStr] >= 4) {
          return Number(numStr) * 4;
        }
      }
      return 0;
    }

    // Малый стрит: строго комбинация 1-2-3-4-5
    case Category.LITTLE_STRAIGHT: {
      if (JSON.stringify(sortedDice) === JSON.stringify([1, 2, 3, 4, 5])) {
        return 30;
      }
      return 0;
    }

    // Большой стрит: строго комбинация 2-3-4-5-6
    case Category.BIG_STRAIGHT: {
      if (JSON.stringify(sortedDice) === JSON.stringify([2, 3, 4, 5, 6])) {
        return 30;
      }
      return 0;
    }

    // Шанс: просто сумма всех выпавших кубиков
    case Category.CHOICE:
      return sumAll;

    // Яхта: все пять кубиков одинаковые
    case Category.YACHT: {
      const values = Object.values(counts);
      if (values.includes(5)) {
        return 50;
      }
      return 0;
    }

    default:
      return 0;
  }
};
