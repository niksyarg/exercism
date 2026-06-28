export const isPangram = (sentence) => {
  const processedSentence = sentence.toLowerCase();
  
  return [..."abcdefghijklmnopqrstuvwxyz"].every((letter) =>
    processedSentence.includes(letter)
  );
};
