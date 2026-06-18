export function twoSum(array1, array2) {
return Number(array1.join('')) + Number(array2.join(""));
}

export function luckyNumber(value) {
 const str = String(value);
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

export function errorMessage(input) {
  if (!input) {
    return 'Required field';
  }
  
  if (isNaN(Number(input)) || Number(input) === 0) {
    return 'Must be a number besides 0';
  }
  
  return '';
}
