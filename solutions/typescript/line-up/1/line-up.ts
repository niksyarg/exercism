export function format(name: unknown, number: unknown):string{
  const n = number as number;
  let suffix = 'th';

  if (n % 100 < 11 || n % 100 > 13){
    switch (n % 10){
      case 1: suffix = 'st'; break;
      case 2: suffix = 'nd'; break;
      case 3: suffix = 'rd'; break;
    }
  }
  return `${name}, you are the ${n}${suffix} customer we serve today. Thank you!`;
}

