class Dna(dnaSequence: String) {
    init {
        require(dnaSequence.all { it in "ACGT" }) { "Invalid nucleotide found" }
    }

    val nucleotideCounts: Map<Char, Int> = 
        mutableMapOf('A' to 0, 'C' to 0, 'G' to 0, 'T' to 0).apply {
            dnaSequence.forEach { char ->
                this[char] = this.getOrDefault(char, 0) + 1
            }
        }
}
