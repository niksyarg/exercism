class DiamondPrinter {

    fun printToList(letter: Char): List<String> {
        val size = letter - 'A'
        val topHalf = ('A'..letter).mapIndexed { index, char ->
            val leadingPadding = " ".repeat(size - index)
            
            if (char == 'A') {
                "$leadingPadding$char$leadingPadding"
            } else {
                val internalPadding = " ".repeat(2 * index - 1)
                "$leadingPadding$char$internalPadding$char$leadingPadding"
            }
        }

        // Mirror the top half (excluding the middle row) to create the bottom half
        val bottomHalf = topHalf.dropLast(1).reversed()
        
        return topHalf + bottomHalf
    }
}
