"""
    count_nucleotides(strand)

The count of each nucleotide within `strand` as a dictionary.

Invalid strands raise a `DomainError`.
"""
function count_nucleotides(strand)
    # Инициализируем словарь со счетчиками для каждого нуклеотида
    counts = Dict('A' => 0, 'C' => 0, 'G' => 0, 'T' => 0)
    
    # Проходим по каждому символу в строке
    for nucleotide in strand
        # Если символ есть в словаре, увеличиваем его счетчик
        if haskey(counts, nucleotide)
            counts[nucleotide] += 1
        else
            # Если символ недопустимый, выбрасываем DomainError
            throw(DomainError(nucleotide, "Invalid nucleotide in DNA strand"))
        end
    end
    
    return counts
end
