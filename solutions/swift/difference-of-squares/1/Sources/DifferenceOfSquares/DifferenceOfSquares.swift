class Squares {
    private let number: Int

    init(_ number: Int) {
        self.number = number
    }


    var squareOfSum: Int {
        let sum = (number * (number + 1)) / 2
        return sum * sum
    }

  
    var sumOfSquares: Int {
        return (number * (number + 1) * (2 * number + 1)) / 6
    }


    var differenceOfSquares: Int {
        return squareOfSum - sumOfSquares
    }
}
