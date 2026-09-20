object PigLatin {
    fun translate(phrase: String): String {
        return phrase.split(" ").joinToString(" ") { translateWord(it) }
    }

    private fun translateWord(word: String): String {
        val vowels = setOf('a', 'e', 'i', 'o', 'u')

        // Правило 1: Начинается с гласной, "xr" или "yt"
        if (word[0] in vowels || word.startsWith("xr") || word.startsWith("yt")) {
            return word + "ay"
        }

        // Правило 3: Начинается с согласных, за которыми следует "qu"
        val quIndex = word.indexOf("qu")
        if (quIndex != -1 && word.substring(0, quIndex).all { it !in vowels }) {
            val prefix = word.substring(0, quIndex + 2)
            val suffix = word.substring(quIndex + 2)
            return suffix + prefix + "ay"
        }

        // Правило 4: Начинается с согласных, за которыми следует "y"
        // 'y' не должна быть самой первой буквой (иначе это обработается как согласная в Правиле 2)
        val yIndex = word.indexOf('y')
        if (yIndex > 0 && word.substring(0, yIndex).all { it !in vowels }) {
            val prefix = word.substring(0, yIndex)
            val suffix = word.substring(yIndex)
            return suffix + prefix + "ay"
        }

        // Правило 2: Начинается с одной или нескольких согласных
        var consonantsCount = 0
        while (consonantsCount < word.length && word[consonantsCount] !in vowels) {
            consonantsCount++
        }
        if (consonantsCount > 0) {
            val prefix = word.substring(0, consonantsCount)
            val suffix = word.substring(consonantsCount)
            return suffix + prefix + "ay"
        }

        return word
    }
}
