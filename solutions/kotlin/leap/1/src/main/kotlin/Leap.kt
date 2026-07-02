data class Year(val year: Int) {

    val isLeap: Boolean = when {
        year % 400 == 0 -> true
        year % 100 == 0 -> false
        else -> year % 4 == 0
    }
}
