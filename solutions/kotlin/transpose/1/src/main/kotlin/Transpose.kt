object Transpose {
    fun transpose(input: List<String>): List<String> {
        if (input.isEmpty()) return emptyList()


        val maxCols = input.maxOf { it.length }
        val result = mutableListOf<String>()


        for (col in 0 until maxCols) {
            val newRow = StringBuilder()

       
            for (row in input.indices) {
                if (col < input[row].length) {
                    newRow.append(input[row][col])
                } else {
                    newRow.append(' ')
                }
            }
            
            result.add(newRow.toString())
        }

        val finalResult = mutableListOf<String>()
        for (i in result.indices) {

            var maxRequiredLength = 0
            for (j in input.indices) {
                if (input[j].length > i) {
                    maxRequiredLength = j + 1
                }
            }
            finalResult.add(result[i].substring(0, maxRequiredLength))
        }

        return finalResult
    }
}
