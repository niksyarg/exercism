object PrimeFactorCalculator {

    fun primeFactors(int: Int): List<Int> {
        val factors = mutableListOf<Int>()
        var n = int
        var divisor = 2
        
        while (divisor * divisor <= n) {
            while (n % divisor == 0) {
                factors.add(divisor)
                n /= divisor
            }
            divisor++
        }
        if (n > 1) {
            factors.add(n)
        }
        return factors
    }

    fun primeFactors(long: Long): List<Long> {
        val factors = mutableListOf<Long>()
        var n = long
        var divisor = 2L
        
        while (divisor * divisor <= n) {
            while (n % divisor == 0L) {
                factors.add(divisor)
                n /= divisor
            }
            divisor++
        }
        if (n > 1L) {
            factors.add(n)
        }
        return factors
    }
}
