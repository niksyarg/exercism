enum NucleotideCountErrors: Error {
    case invalidNucleotide
}

class DNA {
    private let strand: String
    
    // Initializer validates the input string and throws an error if invalid characters exist
    init(strand: String) throws {
        for char in strand {
            if char != "A" && char != "C" && char != "G" && char != "T" {
                throw NucleotideCountErrors.invalidNucleotide
            }
        }
        self.strand = strand
    }
    
    // Counts the frequency of each valid nucleotide
    func counts() -> [String: Int] {
        var result: [String: Int] = ["A": 0, "C": 0, "G": 0, "T": 0]
        
        for char in strand {
            result[String(char), default: 0] += 1
        }
        
        return result
    }
}
