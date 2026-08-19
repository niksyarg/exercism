class Matrix(private val matrixAsString: String) {

    private val data: List<List<Int>> = matrixAsString.lines().map { line ->
        line.trim().split(Regex("\\s+")).map { it.toInt() }
    }

    fun column(colNr: Int): List<Int> {

        return data.map { row -> row[colNr - 1] }
    }

    fun row(rowNr: Int): List<Int> {

        return data[rowNr - 1]
    }
}
