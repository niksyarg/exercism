func isIsogram(_ string: String) -> Bool {
    var seenLetters = Set<Character>()
    
    for char in string.lowercased() {
    
        if char.isLetter {
            
            if seenLetters.contains(char) {
                return false
            }
            
            seenLetters.insert(char)
        }
    }
    
    return true
}
