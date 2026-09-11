export function isPaired(input: string): boolean {
  // Стек для хранения открывающих скобок
  const stack: string[] = [];
  
  // Словарь, который связывает закрывающую скобку с открывающей
  const bracketsMap: { [key: string]: string } = {
    ']': '[',
    '}': '{',
    ')': '('
  };

  // Перебираем каждый символ в строке
  for (const char of input) {
    // Если это открывающая скобка, добавляем её в стек
    if (char === '[' || char === '{' || char === '(') {
      stack.push(char);
    } 
    // Если это закрывающая скобка
    else if (char === ']' || char === '}' || char === ')') {
      // Достаем последнюю скобку из стека
      const lastOpenBracket = stack.pop();
      
      // Если стек был пуст или скобки не совпали — возвращаем false
      if (lastOpenBracket !== bracketsMap[char]) {
        return false;
      }
    }
  }

  // Если стек пустой, значит все скобки нашли свою пару
  return stack.length === 0;
}
