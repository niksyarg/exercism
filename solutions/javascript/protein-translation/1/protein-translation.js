export const translate = (rna = '') => {
  const proteins = [];
  
  // Если строка пустая, возвращаем пустой массив
  if (!rna) return proteins;

  // Разбиваем строку на группы по 3 буквы (кодоны)
  for (let i = 0; i < rna.length; i += 3) {
    const codon = rna.slice(i, i + 3);

    // Проверяем стоп-кодоны
    if (codon === 'UAA' || codon === 'UAG' || codon === 'UGA') {
      break;
    }

    // Сопоставляем кодон с аминокислотой
    if (codon === 'AUG') {
      proteins.push('Methionine');
    } else if (codon === 'UUU' || codon === 'UUC') {
      proteins.push('Phenylalanine');
    } else if (codon === 'UUA' || codon === 'UUG') {
      proteins.push('Leucine');
    } else if (codon === 'UCU' || codon === 'UCC' || codon === 'UCA' || codon === 'UCG') {
      proteins.push('Serine');
    } else if (codon === 'UAU' || codon === 'UAC') {
      proteins.push('Tyrosine');
    } else if (codon === 'UGU' || codon === 'UGC') {
      proteins.push('Cysteine');
    } else if (codon === 'UGG') {
      proteins.push('Tryptophan');
    } else {
      // Если кодон не существует или неполный, выбрасываем ошибку
      throw new Error('Invalid codon');
    }
  }

  return proteins;
};
