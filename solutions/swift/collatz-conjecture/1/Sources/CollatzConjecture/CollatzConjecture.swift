class CollatzConjecture {
    enum CollatzError: Error {
        case invalidInput
    }

    static func steps(_ number: Int) throws -> Int {
        
        guard number > 0 else {
            throw CollatzError.invalidInput
        }
        
        var currentNumber = number
        var stepCount = 0
        

        while currentNumber != 1 {
            if currentNumber % 2 == 0 {
                currentNumber /= 2
            } else {
                currentNumber = currentNumber * 3 + 1
            }
            stepCount += 1
        }
        
        return stepCount
    }
}
