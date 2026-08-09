import kotlin.math.pow

object ArmstrongNumber {

    fun check(input: Int): Boolean {
        val s = input.toString()
        val power = s.length
        
        val sum = s.sumOf { digitChar ->
            val digit = digitChar.digitToInt()
            digit.toDouble().pow(power).toInt()
        }

        return sum == input
    }

}