class IsbnVerifier {

    fun isValid(number: String): Boolean {

        val cleaned = number.replace("-", "")

 
        if (cleaned.length != 10) return false

        var sum = 0

        for (i in 0 until 10) {
            val char = cleaned[i]
            val digit = when {
                char.isDigit() -> char.digitToInt()
           
                char == 'X' && i == 9 -> 10
                else -> return false
            }

      
            val weight = 10 - i
            sum += digit * weight
        }

  
        return sum % 11 == 0
    }
}
