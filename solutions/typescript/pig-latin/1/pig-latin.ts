export function translate(phrase: string): string {
  return phrase
    .split(' ')
    .map(word => {
      // Правило 1: Гласные или "xr", "yt"
      if (/^[aeiou]/i.test(word) || /^(xr|yt)/i.test(word)) {
        return word + 'ay';
      }

      // Правило 3: Согласные, за которыми следует "qu"
      const quMatch = word.match(/^([^aeiou]*qu)(.*)/i);
      if (quMatch) {
        return quMatch[2] + quMatch[1] + 'ay';
      }

      // Правило 4: Согласные, за которыми следует "y"
      const yMatch = word.match(/^([^aeiou]+)(y.*)/i);
      if (yMatch) {
        return yMatch[2] + yMatch[1] + 'ay';
      }

      // Правило 2: Одна или несколько согласных в начале
      const consonantMatch = word.match(/^([^aeiou]+)(.*)/i);
      if (consonantMatch) {
        return consonantMatch[2] + consonantMatch[1] + 'ay';
      }

      return word;
    })
    .join(' ');
}
