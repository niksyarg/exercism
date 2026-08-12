class Year {
    let calendarYear: Int
    
    init(calendarYear: Int) {
        self.calendarYear = calendarYear
    }
    
    var isLeapYear: Bool {
        return calendarYear % 4 == 0 && (calendarYear % 100 != 0 || calendarYear % 400 == 0)
    }
}
