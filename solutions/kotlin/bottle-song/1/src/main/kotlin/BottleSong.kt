object BottleSong {
    fun recite(startBottles: Int, takeDown: Int): String {
        val verses = mutableListOf<String>()
        var current = startBottles
        repeat(takeDown) {
            verses.add(verse(current))
            current -= 1
        }
        return verses.joinToString("\n\n")
    }

    private fun verse(n: Int): String {
        val currentStr = getBottleText(n, capitalized = true)
        val currentLowerStr = getBottleText(n, capitalized = false)
        val nextStr = getBottleText(n - 1, capitalized = false)
        return "$currentStr hanging on the wall,\n" +
               "$currentStr hanging on the wall,\n" +
               "And if one green bottle should accidentally fall,\n" +
               "There'll be $nextStr hanging on the wall."
    }

    private fun getBottleText(n: Int, capitalized: Boolean): String {
        val numberWord = when (n) {
            1 -> if (capitalized) "One" else "one"
            2 -> if (capitalized) "Two" else "two"
            3 -> if (capitalized) "Three" else "three"
            4 -> if (capitalized) "Four" else "four"
            5 -> if (capitalized) "Five" else "five"
            6 -> if (capitalized) "Six" else "six"
            7 -> if (capitalized) "Seven" else "seven"
            8 -> if (capitalized) "Eight" else "eight"
            9 -> if (capitalized) "Nine" else "nine"
            10 -> if (capitalized) "Ten" else "ten"
            else -> if (capitalized) "No" else "no"
        }
        val bottleWord = if (n == 1) "green bottle" else "green bottles"
        return "$numberWord $bottleWord"
    }
}
