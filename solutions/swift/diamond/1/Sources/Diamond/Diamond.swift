class Diamond {
    static func makeDiamond(letter: Character) -> [String] {

        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        guard let targetIndex = alphabet.firstIndex(of: letter) else { return [] }
        
        let letters = Array(alphabet[...targetIndex])
        let size = letters.count
        var result = [String]()
    
        for (i, char) in letters.enumerated() {
            let leadingTrailingSpaces = String(repeating: " ", count: size - 1 - i)
            
            if i == 0 {
  
                let row = leadingTrailingSpaces + String(char) + leadingTrailingSpaces
                result.append(row)
            } else {
         
                let middleSpaces = String(repeating: " ", count: (i * 2) - 1)
                let row = leadingTrailingSpaces + String(char) + middleSpaces + String(char) + leadingTrailingSpaces
                result.append(row)
            }
        }
        

        let bottomHalf = result.dropLast().reversed()
        result.append(contentsOf: bottomHalf)
        
        return result
    }
}
