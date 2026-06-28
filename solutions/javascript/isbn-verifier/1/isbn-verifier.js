export const isValid = (isbn) => {

  const cleanIsbn = isbn.replace(/-/g, '');
  
  if (!/^\d{9}[\dX]$/.test(cleanIsbn)) {
    return false;
  }


  const sum = [...cleanIsbn].reduce((acc, char, index) => {
    const value = char === 'X' ? 10 : parseInt(char, 10);
    return acc + value * (10 - index);
  }, 0);

  return sum % 11 === 0;
};
