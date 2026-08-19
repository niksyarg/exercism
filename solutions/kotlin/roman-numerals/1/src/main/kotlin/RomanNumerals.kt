object RomanNumerals {

    fun value(n: Int): String {
        var number = n
        val result = StringBuilder()
        
    
        
        val arabicValues = intArrayOf(1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1)
        val romanSymbols = arrayOf("M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I")
        
   
        
        for (i in arabicValues.indices) {
            while (number >= arabicValues[i]) {
                result.append(romanSymbols[i]) 
                
                number -= arabicValues[i]      
                
            }
        }
        
        return result.toString()
    }
}
