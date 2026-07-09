import Foundation

func isArmstrongNumber(_ number: Int) -> Bool {
    let s = String(number)
    let count = Double(s.count)
    
    let sum = s.compactMap { Double(String($0)) }
               .reduce(0) { $0 + pow($1, count) }
    
    return Int(sum) == number
}
