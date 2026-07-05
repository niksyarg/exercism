object SumOfMultiples {
    fun sum(factors: Set<Int>, limit: Int): Int {
        return (1 until limit)
            .filter { number -> 
                factors.filter { it > 0 }.any { factor -> number % factor == 0 } 
            }
            .sum()
    }
}
