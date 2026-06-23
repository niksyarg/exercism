object CollatzCalculator {
    fun computeStepCount(start: Int): Int {
        require(start > 0) { "Only positive integers are allowed" }
        
        var current = start
        var steps = 0
        
        while (current != 1) {
            if (current % 2 == 0) {
                current /= 2
            } else {
                current = 3 * current + 1
            }
            steps++
        }
        
        return steps
    }
}
