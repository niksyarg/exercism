import java.math.BigInteger

object Board {

    fun getGrainCountForSquare(number: Int): BigInteger {
        require(number in 1..64) { "Only squares 1 to 64 are allowed" }
        return BigInteger.valueOf(2).pow(number - 1)
    }

    fun getTotalGrainCount(): BigInteger {
        // Сумма зерен на 64 клетках: 2^64 - 1
        return BigInteger.valueOf(2).pow(64).subtract(BigInteger.ONE)
    }
}
