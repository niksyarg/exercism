function proteins(strand)
    # Словарь соответствия кодонов и аминокислот
    codon_table = Dict(
        "AUG" => "Methionine",
        "UUU" => "Phenylalanine", "UUC" => "Phenylalanine",
        "UUA" => "Leucine", "UUG" => "Leucine",
        "UCU" => "Serine", "UCC" => "Serine", "UCA" => "Serine", "UCG" => "Serine",
        "UAU" => "Tyrosine", "UAC" => "Tyrosine",
        "UGU" => "Cysteine", "UGC" => "Cysteine",
        "UGG" => "Tryptophan",
        "UAA" => "STOP", "UAG" => "STOP", "UGA" => "STOP"
    )
    
    result = String[]
    
    # Разбиваем строку на кодоны по 3 символа
    for i in 1:3:length(strand)
        # Проверяем, достаточно ли символов для целого кодона
        if i + 2 > length(strand)
            throw(DomainError(strand, "Неполный кодон в конце строки"))
        end
        
        codon = strand[i:i+2]
        
        # Проверяем, существует ли такой кодон в таблице
        if !haskey(codon_table, codon)
            throw(DomainError(codon, "Неизвестный кодон"))
        end
        
        amino_acid = codon_table[codon]
        
        if amino_acid == "STOP"
            break
        end
        
        push!(result, amino_acid)
    end
    
    return result
end
