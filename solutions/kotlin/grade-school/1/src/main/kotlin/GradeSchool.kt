class School {
 
    private val students = mutableMapOf<String, Int>()

    fun add(student: String, grade: Int) {
        students[student] = grade
    }

    fun grade(grade: Int): List<String> {
        return students.filter { it.value == grade }
            .keys
            .sorted()
    }

    fun roster(): List<String> {
        return students.entries
            .sortedWith(compareBy<Map.Entry<String, Int>> { it.value }.thenBy { it.key })
            .map { it.key }
    }
}
