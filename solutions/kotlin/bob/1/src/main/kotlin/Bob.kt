object Bob {
    fun hey(input: String): String {
        val remark = input.trim()
        
        if (remark.isEmpty()) {
            return "Fine. Be that way!"
        }

        val isQuestion = remark.endsWith("?")
        val hasLetters = remark.any { it.isLetter() }
        val isYelling = hasLetters && remark == remark.uppercase()

        return when {
            isYelling && isQuestion -> "Calm down, I know what I'm doing!"
            isYelling -> "Whoa, chill out!"
            isQuestion -> "Sure."
            else -> "Whatever."
        }
    }
}
