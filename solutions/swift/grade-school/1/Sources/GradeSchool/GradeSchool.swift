class GradeSchool {
    private var rosterDict: [Int: [String]] = [:]
    private var allStudents: Set<String> = []

    func addStudent(_ name: String, grade: Int) -> Bool {
    
        if allStudents.contains(name) {
            return false
        }
        
        rosterDict[grade, default: []].append(name)
        allStudents.insert(name)
        return true
    }

    func roster() -> [String] {

        let sortedGrades = rosterDict.keys.sorted()
        var result: [String] = []
        
        for grade in sortedGrades {
            result.append(contentsOf: rosterDict[grade]!.sorted())
        }
        
        return result
    }

    func studentsInGrade(_ grade: Int) -> [String] {
       
        return rosterDict[grade]?.sorted() ?? []
    }
}
