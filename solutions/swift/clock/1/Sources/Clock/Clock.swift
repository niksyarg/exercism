import Foundation

struct Clock: Equatable {
    private let totalMinutes: Int
    
 
    private init(totalMinutes: Int) {
        let minutesInDay = 24 * 60

        let normalizedMinutes = (totalMinutes % minutesInDay + minutesInDay) % minutesInDay
        self.totalMinutes = normalizedMinutes
    }
    

    init(hours: Int, minutes: Int = 0) {
        self.init(totalMinutes: hours * 60 + minutes)
    }
    

    var description: String {
        let hours = totalMinutes / 60
        let minutes = totalMinutes % 60
        return String(format: "%02d:%02d", hours, minutes)
    }
    

    func add(minutes: Int) -> Clock {
        return Clock(totalMinutes: self.totalMinutes + minutes)
    }
    

    func subtract(minutes: Int) -> Clock {
        return Clock(totalMinutes: self.totalMinutes - minutes)
    }
    

}
