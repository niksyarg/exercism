export const encode = (string) => {
  return string.replace(/(.)\1+/g, (match, char) => match.length + char);
};

export const decode = (string) => {
  return string.replace(/(\d+)(.)/g, (_, count, char) => char.repeat(count));
};
