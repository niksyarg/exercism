import Foundation

func modifier(_ score: Int) -> Int {
    return Int(floor(Double(score - 10) / 2.0))
}

func ability() -> Int {
    let rolls = (1...4).map { _ in Int.random(in: 1...6) }
    let sortedRolls = rolls.sorted()
    return sortedRolls.dropFirst().reduce(0, +)
}

struct DndCharacter {
    let strength: Int = ability()
    let dexterity: Int = ability()
    let constitution: Int = ability()
    let intelligence: Int = ability()
    let wisdom: Int = ability()
    let charisma: Int = ability()
    
    var hitpoints: Int {
        return 10 + modifier(constitution)
    }
}
