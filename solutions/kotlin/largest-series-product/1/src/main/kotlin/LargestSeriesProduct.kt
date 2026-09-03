class Series(private val input: String) {

    init {
        require(input.all { it.isDigit() }) { "Input must only contain digits." }
    }

    fun getLargestProduct(span: Int): Long {
        require(span in 0..input.length) { "Span must be smaller than or equal to string length and non-negative." }
        if (span == 0) return 1L

        return input.windowed(span) { window ->
            window.map { it.toString().toLong() }.reduce { acc, digit -> acc * digit }
        }.maxOrNull() ?: 1L
    }
}
