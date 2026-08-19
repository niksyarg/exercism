object Prime {

    fun nth(n: Int): Int {
        require(n > 0) { "There is no zeroth or negative prime." }
        
        val primes = mutableListOf<Int>()
        var candidate = 2
        
        while (primes.size < n) {
            if (isPrime(candidate, primes)) {
                primes.add(candidate)
            }
            candidate++
        }
        
        return primes.last()
    }

    private fun isPrime(number: Int, existingPrimes: List<Int>): Boolean {
    
        for (prime in existingPrimes) {
            if (prime * prime > number) break
            if (number % prime == 0) return false
        }
        return true
    }
}
