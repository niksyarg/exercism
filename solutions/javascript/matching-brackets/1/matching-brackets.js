export const isPaired = (str) => {
const stack = [];
  const brackets ={
    '}': '{',
    ']': '[',
    ')': '('
  };
  for(const char of str){
    if (brackets[char]){
      if (stack.pop() !== brackets[char]){
        return false;
      }
    }
    else if (Object.values(brackets).includes(char)){
      stack.push(char);
    }
  }
  return stack.length ===0;
};
