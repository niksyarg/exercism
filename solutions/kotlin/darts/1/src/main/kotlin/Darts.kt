import kotlin.math.sqrt

object Darts {
    fun score(x: Number, y: Number): Int {
        val xDouble = x.toDouble()
        val yDouble = y.toDouble()
        val distance = sqrt(xDouble * xDouble + yDouble * yDouble)

        return when {
            distance > 10 -> 0
            distance > 5  -> 1
            distance > 1  -> 5
            else          -> 10
        }
    }
}
