pub fn expected_minutes_in_oven() -> u32 {
    // Возвращает ожидаемое время нахождения в духовке (40 минут)
    40
}

pub fn remaining_minutes_in_oven(actual_minutes_in_oven: u32) -> u32 {
    // Вычитает текущее время в духовке из ожидаемого общего времени
    expected_minutes_in_oven() - actual_minutes_in_oven
}

pub fn preparation_time_in_minutes(number_of_layers: u32) -> u32 {
    // Каждый слой требует 2 минуты на подготовку
    number_of_layers * 2
}

pub fn elapsed_time_in_minutes(number_of_layers: u32, actual_minutes_in_oven: u32) -> u32 {
    // Сумма времени подготовки всех слоев и времени, уже проведенного в духовке
    preparation_time_in_minutes(number_of_layers) + actual_minutes_in_oven
}

