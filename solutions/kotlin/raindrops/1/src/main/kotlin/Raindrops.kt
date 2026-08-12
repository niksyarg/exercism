object Raindrops {
    fun convert(n: Int): String {
        val result = buildString {
            if (n % 3 == 0) append("Pling")
            if (n % 5 == 0) append("Plang")
            if (n % 7 == 0) append("Plong")
        }
        return if (result.isEmpty()) n.toString() else result
    }
}
