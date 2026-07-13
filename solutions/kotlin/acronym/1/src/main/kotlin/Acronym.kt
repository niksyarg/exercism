object Acronym {
    fun generate(phrase: String): String {
        return phrase
            .replace("-", " ")
.filter { it.isLetter() || it.isWhitespace() }
           
            .split(" ")
            .filter { it.isNotEmpty() }
  
            .map { it.first().uppercase() }

            .joinToString("")
    }
}
