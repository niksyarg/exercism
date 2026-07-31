
interface AnimalData {
  name: string;
  reaction: string;
}

const ANIMALS: AnimalData[] = [
  { name: 'fly', reaction: "I don't know why she swallowed the fly. Perhaps she'll die.\n" },
  { name: 'spider', reaction: 'It wriggled and jiggled and tickled inside her.\n' },
  { name: 'bird', reaction: 'How absurd to swallow a bird!\n' },
  { name: 'cat', reaction: 'Imagine that, to swallow a cat!\n' },
  { name: 'dog', reaction: 'What a hog, to swallow a dog!\n' },
  { name: 'goat', reaction: 'Just opened her throat and swallowed a goat!\n' },
  { name: 'cow', reaction: "I don't know how she swallowed a cow!\n" },
  { name: 'horse', reaction: "She's dead, of course!\n" } // Последний куплет уникален
];

export function verse(index: number): string {

  const i = index - 1;
  const currentAnimal = ANIMALS[i];
  
  let res = `I know an old lady who swallowed a ${currentAnimal.name}.\n`;
  res += currentAnimal.reaction;

 
  if (currentAnimal.name === 'horse') {
    return res;
  }


  if (currentAnimal.name !== 'fly') {
    for (let j = i; j > 0; j--) {
      const predator = ANIMALS[j].name;
      let prey = ANIMALS[j - 1].name;


      if (prey === 'spider') {
        prey += ' that wriggled and jiggled and tickled inside her';
      }

      res += `She swallowed the ${predator} to catch the ${prey}.\n`;
    }
    
  
    res += ANIMALS[0].reaction;
  }

  return res;
}

export function verses(start: number, end: number): string {
  const result: string[] = [];
  
  for (let i = start; i <= end; i++) {
    result.push(verse(i));
  }
  

  return result.join('\n');
}
