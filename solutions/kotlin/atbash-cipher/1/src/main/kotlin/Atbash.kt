object Atbash {
    private const val ALPHABET = "abcdefghijklmnopqrstuvwxyz"
    private const val CIPHER = "zyxwvutsrqponmlkjihgfedcba"

    private fun transform(char: Char): Char {
        val index = ALPHABET.indexOf(char)
        return if (index != -1) CIPHER[index] else char
    }

    fun encode(s: String): String {
        return s.lowercase()
            .filter { it.isLetterOrDigit() }
            .map { transform(it) }
            .joinToString("")
            .chunked(5)
            .joinToString(" ")
    }

    fun decode(s: String): String {
        return s.filter { it.isLetterOrDigit() }
            .map { transform(it) }
            .joinToString("")
    }
}
