class RotationalCipher(private val shiftKey: Int) {

    fun encode(text: String): String {
        return text.map { char ->
            when {
                char.isLowerCase() -> rotate(char, 'a')
                char.isUpperCase() -> rotate(char, 'A')
                else -> char
            }
        }.joinToString("")
    }

    private fun rotate(char: Char, base: Char): Char {
        val offset = (char - base + shiftKey) % 26
        return (base + offset)
    }
}
