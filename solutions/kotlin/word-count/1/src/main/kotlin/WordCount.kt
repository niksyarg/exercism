object WordCount {
    fun phrase(phrase: String): Map<String, Int> {

        val wordRegex = Regex("[a-z0-9]+('[a-z0-9]+)?")
        
        return wordRegex.findAll(phrase.lowercase())
            .map { it.value }
            .groupBy { it }
            .mapValues { it.value.size }
    }
}
