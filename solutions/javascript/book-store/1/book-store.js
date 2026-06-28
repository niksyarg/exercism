const BOOK_PRICE = 800; 
const DISCOUNTS = {
  1: 1.00,
  2: 0.95,
  3: 0.90,
  4: 0.80,
  5: 0.75,
};

export const cost = (books) => {
  if (books.length === 0) return 0;


  const counts = Array(5).fill(0);
  books.forEach(book => counts[book - 1]++);
  

  const state = counts.filter(c => c > 0).sort((a, b) => b - a);
  const memo = new Map();

  const calculate = (currentCounts) => {
    const key = currentCounts.join(',');
    if (key === '') return 0;
    if (memo.has(key)) return memo.get(key);

    let minCost = Infinity;
    const numDifferentBooks = currentCounts.length;


    for (let i = 1; i <= numDifferentBooks; i++) {
      const nextCounts = currentCounts
        .map((count, index) => (index < i ? count - 1 : count))
        .filter(count => count > 0)
        .sort((a, b) => b - a);

      const currentGroupCost = i * BOOK_PRICE * DISCOUNTS[i];
      minCost = Math.min(minCost, currentGroupCost + calculate(nextCounts));
    }

    memo.set(key, minCost);
    return minCost;
  };

  return calculate(state);
};
