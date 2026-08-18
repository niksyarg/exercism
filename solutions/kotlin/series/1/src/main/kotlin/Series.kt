object Series {
    fun slices(n: Int, s: String): List<List<Int>> {
        require(n in 1..s.length) { "Invalid slice length" }
        return s.windowed(n) { slice ->
            slice.map { it.digitToInt() }
        }
    }
}
