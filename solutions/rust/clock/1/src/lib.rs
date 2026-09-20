use std::fmt;

#[derive(Debug, PartialEq, Eq)]
pub struct Clock {
    hours: i32,
    minutes: i32,
}

impl Clock {
    pub fn new(hours: i32, minutes: i32) -> Self {
        // Вычисляем общее количество минут в сутках (24 * 60 = 1440)
        let total_minutes = hours * 60 + minutes;
        
        // Нормализуем минуты в диапазон [0, 1439] с учетом отрицательных значений
        let mut normalized_minutes = total_minutes % 1440;
        if normalized_minutes < 0 {
            normalized_minutes += 1440;
        }

        Clock {
            hours: normalized_minutes / 60,
            minutes: normalized_minutes % 60,
        }
    }

    pub fn add_minutes(&self, minutes: i32) -> Self {
        Clock::new(self.hours, self.minutes + minutes)
    }
}

// Реализация трейта Display автоматически даёт метод .to_string()
impl fmt::Display for Clock {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{:02}:{:02}", self.hours, self.minutes)
    }
}
