class Squares(private val n: Int) {

    fun sumOfSquares(): Int {
        return (1..n).sumOf { it * it }
    }

    fun squareOfSum(): Int {
        val sum = (1..n).sum()
        return sum * sum
    }

    fun difference(): Int {
        return squareOfSum() - sumOfSquares()
    }
}
