pub fn translate(rna: &str) -> Option<Vec<&str>> {
    let mut protein = Vec::new();
    
    // Разбиваем строку РНК на кодоны по 3 символа
    for chunk in rna.as_bytes().chunks(3) {
        // Если кодон неполный (меньше 3 символов), это некорректная РНК
        if chunk.len() < 3 {
            return None;
        }
        
        // Преобразуем срез байт в строку для сопоставления
        let codon = std::str::from_utf8(chunk).ok()?;
        
        match codon {
            "AUG" => protein.push("Methionine"),
            "UUU" | "UUC" => protein.push("Phenylalanine"),
            "UUA" | "UUG" => protein.push("Leucine"),
            "UCU" | "UCC" | "UCA" | "UCG" => protein.push("Serine"),
            "UAU" | "UAC" => protein.push("Tyrosine"),
            "UGU" | "UGC" => protein.push("Cysteine"),
            "UGG" => protein.push("Tryptophan"),
            "UAA" | "UAG" | "UGA" => break, // Стоп-кодон: завершаем трансляцию
            _ => return None, // Неизвестный кодон: возвращаем None
        }
    }
    
    Some(protein)
}
