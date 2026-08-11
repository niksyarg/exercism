func toRna(_ dna: String) -> String {
    let complements: [Character: Character] = [
        "G": "C",
        "C": "G",
        "T": "A",
        "A": "U"
    ]
    
    return String(dna.compactMap { complements[$0] })
}
