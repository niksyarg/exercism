export function isValid(isbn: string): boolean {

  const cleanIsbn = isbn.replace(/-/g, '');


  if (cleanIsbn.length !== 10) {
    return false;
  }

  let sum = 0;

  for (let i = 0; i < 10; i++) {
    const char = cleanIsbn[i];

    if (i === 9 && char.toUpperCase() === 'X') {
   
      sum += 10 * 1;
    } else {

      const digit = parseInt(char, 10);

     
      if (isNaN(digit)) {
        return false;
      }


      sum += digit * (10 - i);
    }
  }


  return sum % 11 === 0;
}
