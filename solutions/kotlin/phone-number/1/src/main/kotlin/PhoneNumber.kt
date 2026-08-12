class PhoneNumber(val input: String) {

    val number: String = cleanNumber(input)

    private fun cleanNumber(input: String): String {

        val digits = input.filter { it.isDigit() }

        val normalizedDigits = when (digits.length) {
            10 -> digits
            11 -> {
                require(digits[0] == '1') { "11 digits must start with country code 1" }
                digits.substring(1)
            }
            else -> throw IllegalArgumentException("Invalid number of digits")
        }

        
        require(normalizedDigits[0] in '2'..'9') { "Area code cannot start with 0 or 1" }
        require(normalizedDigits[3] in '2'..'9') { "Exchange code cannot start with 0 or 1" }

        return normalizedDigits
    }
}
