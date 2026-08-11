struct SquareRoot {
    static func squareRoot(_ number: Int) -> Int {
        var low = 1
        var high = number
        
        while low <= high {
            let mid = low + (high - low) / 2
            let squared = mid * mid
            
            if squared == number {
                return mid
            } else if squared < number {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
        
        return high
    }
}
