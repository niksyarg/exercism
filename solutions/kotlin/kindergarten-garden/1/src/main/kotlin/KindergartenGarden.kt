class KindergartenGarden(private val diagram: String) {


    private val students = listOf(
        "Alice", "Bob", "Charlie", "David",
        "Eve", "Fred", "Ginny", "Harriet",
        "Ileana", "Joseph", "Kincaid", "Larry"
    )


    private val plantMapping = mapOf(
        'G' to "grass",
        'C' to "clover",
        'R' to "radishes",
        'V' to "violets"
    )

    fun getPlantsOfStudent(student: String): List<String> {
  
        val studentIndex = students.indexOf(student)
        if (studentIndex == -1) return emptyList()


        val rows = diagram.lines()
        val row1 = rows.getOrNull(0) ?: ""
        val row2 = rows.getOrNull(1) ?: ""

    
        val firstCupIndex = studentIndex * 2
        val secondCupIndex = firstCupIndex + 1

        val result = mutableListOf<String>()

      
        if (firstCupIndex < row1.length) {
            plantMapping[row1[firstCupIndex]]?.let { result.add(it) }
        }
        if (secondCupIndex < row1.length) {
            plantMapping[row1[secondCupIndex]]?.let { result.add(it) }
        }

   
        if (firstCupIndex < row2.length) {
            plantMapping[row2[firstCupIndex]]?.let { result.add(it) }
        }
        if (secondCupIndex < row2.length) {
            plantMapping[row2[secondCupIndex]]?.let { result.add(it) }
        }

        return result
    }
}
