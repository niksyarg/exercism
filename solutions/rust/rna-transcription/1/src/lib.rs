#[derive(Debug, PartialEq, Eq)]
pub struct Dna {
    nucleotides: String,
}

#[derive(Debug, PartialEq, Eq)]
pub struct Rna {
    nucleotides: String,
}

impl Dna {
    pub fn new(dna: &str) -> Result<Dna, usize> {
        // Проверяем каждый нуклеотид. Если находим недопустимый, 
        // возвращаем его индекс через Err(index).
        for (index, character) in dna.chars().enumerate() {
            match character {
                'G' | 'C' | 'T' | 'A' => continue,
                _ => return Err(index),
            }
        }
        
        Ok(Dna { nucleotides: dna.to_string() })
    }

    pub fn into_rna(self) -> Rna {
        // Заменяем каждый нуклеотид ДНК на соответствующий нуклеотид РНК
        let rna_string: String = self.nucleotides
            .chars()
            .map(|character| match character {
                'G' => 'C',
                'C' => 'G',
                'T' => 'A',
                'A' => 'U',
                _ => unreachable!(), // ДНК уже валидирована в new()
            })
            .collect();

        Rna { nucleotides: rna_string }
    }
}

impl Rna {
    pub fn new(rna: &str) -> Result<Rna, usize> {
        // Проверяем валидность РНК строки
        for (index, character) in rna.chars().enumerate() {
            match character {
                'G' | 'C' | 'A' | 'U' => continue,
                _ => return Err(index),
            }
        }

        Ok(Rna { nucleotides: rna.to_string() })
    }
}
