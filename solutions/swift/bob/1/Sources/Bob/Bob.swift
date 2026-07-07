import Foundation

class Bob {
    static func response(_ message: String) -> String {
        let input = message.trimmingCharacters(in: .whitespacesAndNewlines)
        
        if input.isEmpty {
            return "Fine. Be that way!"
        }
        
        let isQuestion = input.hasSuffix("?")
        let isYelling = input.uppercased() == input && input.rangeOfCharacter(from: .letters) != nil
        
        if isYelling && isQuestion {
            return "Calm down, I know what I'm doing!"
        } else if isYelling {
            return "Whoa, chill out!"
        } else if isQuestion {
            return "Sure."
        } else {
            return "Whatever."
        }
    }
}
