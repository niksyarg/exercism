class ETL {
    static func transform(_ old: [String: [String]]) -> [String: Int] {
        var result = [String: Int]()
        
        for (score, letters) in old {
            for letter in letters {
   
                if let scoreInt = Int(score) {
                    result[letter.lowercased()] = scoreInt
                }
            }
        }
        
        return result
    }
}
