class NumberSpeller {

    private val units = arrayOf(
        "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
        "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", 
        "seventeen", "eighteen", "nineteen"
    )

    private val tens = arrayOf(
        "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
    )

    private val scales = arrayOf("", "thousand", "million", "billion")

    fun say(input: Long): String {
        // Проверка на корректность диапазона (согласно Step 1)
        require(input in 0..999999999999L) { "Number out of range" }

        if (input == 0L) return "zero"

        var number = input
        val chunks = mutableListOf<String>()
        var scaleIndex = 0

        // Разделяем число на тройки (chunks) с конца (согласно Step 2 и Step 3)
        while (number > 0) {
            val chunk = (number % 1000).toInt()
            if (chunk != 0) {
                val chunkText = convertChunkToText(chunk)
                val scaleText = scales[scaleIndex]
                
                if (scaleText.isEmpty()) {
                    chunks.add(chunkText)
                } else {
                    chunks.add("$chunkText $scaleText")
                }
            }
            number /= 1000
            scaleIndex++
        }

        // Соединяем все части в обратном порядке (согласно Step 4)
        return chunks.reversed().joinToString(" ")
    }

    // Вспомогательная функция для обработки чисел от 1 до 999
    private fun convertChunkToText(number: Int): String {
        val result = mutableListOf<String>()

        val hundreds = number / 100
        val remainder = number % 100

        if (hundreds > 0) {
            result.add("${units[hundreds]} hundred")
        }

        if (remainder > 0) {
            if (remainder < 20) {
                result.add(units[remainder])
            } else {
                val tenPart = remainder / 10
                val unitPart = remainder % 10
                if (unitPart > 0) {
                    result.add("${tens[tenPart]}-${units[unitPart]}")
                } else {
                    result.add(tens[tenPart])
                }
            }
        }

        return result.joinToString(" ")
    }
}
