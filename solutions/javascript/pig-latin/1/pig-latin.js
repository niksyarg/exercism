export const translate = (phrase) => {
  return phrase.split(' ').map(word => {
    if (/^([aeiou]|xr|yt)/.test(word)) {
      return word + 'ay';
    }

    const quMatch = word.match(/^([^aeiou]*qu)(.*)/);
    if (quMatch) {
      return quMatch[2] + quMatch[1] + 'ay';
    }

    const yMatch = word.match(/^([^aeiou]+)(y.*)/);
    if (yMatch) {
      return yMatch[2] + yMatch[1] + 'ay';
    }

    const consMatch = word.match(/^([^aeiou]+)(.*)/);
    if (consMatch) {
      return consMatch[2] + consMatch[1] + 'ay';
    }

    return word;
  }).join(' ');
};
