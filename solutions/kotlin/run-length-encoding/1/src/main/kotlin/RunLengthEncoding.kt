object RunLengthEncoding {

    fun encode(input: String): String {
        if (input.isEmpty()) return ""
        
        val result = StringBuilder()
        var count = 1
        
        for (i in 1 until input.length) {
            if (input[i] == input[i - 1]) {
                count++
            } else {
                if (count > 1) result.append(count)
                result.append(input[i - 1])
                count = 1
            }
        }
        
        if (count > 1) result.append(count)
        result.append(input.last())
        
        return result.toString()
    }

    fun decode(input: String): String {
        val result = StringBuilder()
        var count = 0
        
        for (char in input) {
            if (char.isDigit()) {
                count = count * 10 + (char - '0')
            } else {
                val repeatCount = if (count == 0) 1 else count
                result.append(char.toString().repeat(repeatCount))
                count = 0
            }
        }
        
        return result.toString()
    }
}
