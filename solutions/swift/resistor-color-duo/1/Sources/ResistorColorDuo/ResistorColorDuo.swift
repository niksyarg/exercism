import Foundation

enum ResistorColorDuo {
    private static let colorMap: [String: Int] = [
        "black": 0,
        "brown": 1,
        "red": 2,
        "orange": 3,
        "yellow": 4,
        "green": 5,
        "blue": 6,
        "violet": 7,
        "grey": 8,
        "white": 9
    ]

    static func value(for colors: [String]) -> Int {
        guard colors.count >= 2,
              let first = colorMap[colors[0].lowercased()],
              let second = colorMap[colors[1].lowercased()] else {
            return 0
        }

        return first * 10 + second
    }
}
