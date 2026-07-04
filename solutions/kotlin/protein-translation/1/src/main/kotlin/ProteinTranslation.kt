fun translate(rna: String?): List<String> {
    if (rna == null) return emptyList()

    val proteins = mutableListOf<String>()
    
    val codons = rna.chunked(3)

    for (codon in codons) {
        val aminoAcid = when (codon) {
            "AUG" -> "Methionine"
            "UUU", "UUC" -> "Phenylalanine"
            "UUA", "UUG" -> "Leucine"
            "UCU", "UCC", "UCA", "UCG" -> "Serine"
            "UAU", "UAC" -> "Tyrosine"
            "UGU", "UGC" -> "Cysteine"
            "UGG" -> "Tryptophan"
            "UAA", "UAG", "UGA" -> "STOP"
            else -> throw IllegalArgumentException("Invalid codon")
        }

        if (aminoAcid == "STOP") break
        proteins.add(aminoAcid)
    }

    return proteins
}
