func raindrops(_ number: Int) -> String {
    var result = ""

    if number.isMultiple(of: 3) {
        result += "Pling"
    }
    if number.isMultiple(of: 5) {
        result += "Plang"
    }
    if number.isMultiple(of: 7) {
        result += "Plong"
    }

    return result.isEmpty ? "\(number)" : result
}