export const answer = (question: string): number => {

  const cleaned = question
    .replace(/^What is\s?/, '')
    .replace(/\?$/, '')
    .trim();


if (cleaned === "") throw new Error('Syntax error')
  if (!cleaned) throw new Error('Unknown operation');
  if (!question.includes("plus")&& !question.includes("minus")&& !question.includes("multiplied")&& !question.includes("divided")&& isNaN(+cleaned)){
    throw new Error('Unknown operation');
  }
  const tokens = cleaned
    .replace(/plus/g, '+')
    .replace(/minus/g, '-')
    .replace(/multiplied by/g, '*')
    .replace(/divided by/g, '/')
    .split(/\s+/);

  let result = parseInt(tokens[0]);
  if (isNaN(result)) throw new Error('Syntax error');
  for (let i = 1; i < tokens.length; i += 2) {
    const op = tokens[i];
    const nextVal = parseInt(tokens[i + 1]);


    if (isNaN(nextVal)) throw new Error('Syntax error');
    switch (op) {
      case '+': result += nextVal; break;
      case '-': result -= nextVal; break;
      case '*': result *= nextVal; break;
      case '/': result /= nextVal; break;
      default: throw new Error('Syntax error');
    }
  }

  if (tokens.length % 2 === 0) throw new Error('Syntax error');

  return result;
};
