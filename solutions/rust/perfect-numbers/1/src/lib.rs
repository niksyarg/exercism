#[derive(Debug, PartialEq, Eq)]
pub enum Classification {
    Abundant,
    Perfect,
    Deficient,
}

pub fn classify(num: u64) -> Option<Classification> {
    // Классификация определена только для положительных чисел (от 1 и выше)
    if num == 0 {
        return None;
    }

    // Число 1 не имеет собственных делителей, его аликвотная сумма равна 0
    if num == 1 {
        return Some(Classification::Deficient);
    }

    // Инициализируем сумму единицей, так как 1 является делителем любого числа > 1
    let mut aliquot_sum = 1;
    
    // Перебираем потенциальные делители до квадратного корня из num
    let mut i = 2;
    while i * i <= num {
        if num % i == 0 {
            aliquot_sum += i;
            // Если делители разные (например, для 12 это 2 и 6), добавляем оба
            if i * i != num {
                aliquot_sum += num / i;
            }
        }
        i += 1;
    }

    // Сравниваем полученную сумму с исходным числом
    match aliquot_sum.cmp(&num) {
        std::cmp::Ordering::Equal => Some(Classification::Perfect),
        std::cmp::Ordering::Greater => Some(Classification::Abundant),
        std::cmp::Ordering::Less => Some(Classification::Deficient),
    }
}
