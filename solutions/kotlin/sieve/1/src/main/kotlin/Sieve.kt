object Sieve {

    fun primesUpTo(upperBound: Int): List<Int> {
        if (upperBound < 2) return emptyList()

        val isPrime = BooleanArray(upperBound + 1) { true }
        
       
        isPrime[0] = false
        isPrime[1] = false

       
        var p = 2
        while (p * p <= upperBound) {

            if (isPrime[p]) {
               
                var i = p * p
                while (i <= upperBound) {
                    isPrime[i] = false
                    i += p
                }
            }
            p++
        }

        val primes = mutableListOf<Int>()
        for (number in 2..upperBound) {
            if (isPrime[number]) {
                primes.add(number)
            }
        }

        return primes
    }
}
