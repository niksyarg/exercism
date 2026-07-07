import Foundation

func dartScore(x: Double, y: Double) -> Int {
    let radius = sqrt(x * x + y * y)
    
    switch radius {
    case ...1:
        return 10
    case ...5:
        return 5
    case ...10:
        return 1
    default:
        return 0
    }
}
