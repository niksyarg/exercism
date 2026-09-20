import java.time.DayOfWeek
import java.time.LocalDate

class Meetup(val month: Int, val year: Int) {

    fun day(dayOfWeek: DayOfWeek, schedule: MeetupSchedule): LocalDate {
        // Создаем начальную дату месяца
        val startDay = LocalDate.of(year, month, 1)
        // Находим количество дней в этом месяце
        val lengthOfMonth = startDay.lengthOfMonth()
        
        // Создаем список всех дат месяца, которые совпадают с нужным днем недели
        val matchingDates = mutableListOf<LocalDate>()
        for (day in 1..lengthOfMonth) {
            val date = LocalDate.of(year, month, day)
            if (date.dayOfWeek == dayOfWeek) {
                matchingDates.add(date)
            }
        }

        // Выбираем дату в зависимости от правила schedule
        return when (schedule) {
            MeetupSchedule.FIRST  -> matchingDates[0]
            MeetupSchedule.SECOND -> matchingDates[1]
            MeetupSchedule.THIRD  -> matchingDates[2]
            MeetupSchedule.FOURTH -> matchingDates[3]
            MeetupSchedule.LAST   -> matchingDates.last()
            MeetupSchedule.TEENTH -> matchingDates.first { it.dayOfMonth in 13..19 }
        }
    }
}
