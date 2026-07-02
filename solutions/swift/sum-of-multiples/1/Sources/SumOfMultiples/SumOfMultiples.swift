func toLimit(_ limit: Int, inMultiples: [Int]) -> Int {
    var multiples = Set<Int>()
    
    for factor in inMultiples {
        guard factor > 0 else { continue }
        
        var current = factor
        while current < limit {
            multiples.insert(current)
            current += factor
        }
    }
    
    return multiples.reduce(0, +)
}
