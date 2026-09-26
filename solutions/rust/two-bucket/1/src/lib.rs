#[derive(PartialEq, Eq, Debug, Clone, Copy)]
pub enum Bucket {
    One,
    Two,
}

#[derive(PartialEq, Eq, Debug)]
pub struct BucketStats {
    pub moves: u8,
    pub goal_bucket: Bucket,
    pub other_bucket: u8,
}

/// Решает задачу о двух вёдрах
pub fn solve(
    capacity_1: u8,
    capacity_2: u8,
    goal: u8,
    start_bucket: &Bucket,
) -> Option<BucketStats> {
    // Если целевой объём больше обоих вёдер, это невозможно
    if goal > capacity_1 && goal > capacity_2 {
        return None;
    }

    // Инициализируем состояние вёдер
    let mut b1 = 0;
    let mut b2 = 0;
    let mut moves = 0;

    // Определяем роли вёдер на основе стартового ведра
    let (start_cap, other_cap) = match start_bucket {
        Bucket::One => (capacity_1, capacity_2),
        Bucket::Two => (capacity_2, capacity_1),
    };

    // Шаг 1: Первое действие ВСЕГДА должно быть заполнением стартового ведра
    match start_bucket {
        Bucket::One => b1 = capacity_1,
        Bucket::Two => b2 = capacity_2,
    }
    moves += 1;

    // Особый случай: если другое ведро по объёму равно цели, и это запрещённое правило №3 состояние
    // (стартовое ведро пустое, другое полное), мы должны проверить это сразу
    if other_cap == goal {
        match start_bucket {
            Bucket::One => {
                b2 = capacity_2;
                moves += 1;
            }
            Bucket::Two => {
                b1 = capacity_1;
                moves += 1;
            }
        }
    }

    // Основной цикл симуляции переливаний
    loop {
        // Проверяем, достигнута ли цель
        if b1 == goal {
            return Some(BucketStats {
                moves,
                goal_bucket: Bucket::One,
                other_bucket: b2,
            });
        }
        if b2 == goal {
            return Some(BucketStats {
                moves,
                goal_bucket: Bucket::Two,
                other_bucket: b1,
            });
        }

        // Стратегия переливания в зависимости от стартового ведра
        match start_bucket {
            Bucket::One => {
                if b1 == 0 {
                    // 1. Если стартовое ведро пустое, наполняем его
                    b1 = capacity_1;
                } else if b2 == capacity_2 {
                    // 2. Если другое ведро полное, опустошаем его
                    b2 = 0;
                } else {
                    // 3. Иначе переливаем из стартового во второе
                    let amount = std::cmp::min(b1, capacity_2 - b2);
                    b1 -= amount;
                    b2 += amount;
                }
            }
            Bucket::Two => {
                if b2 == 0 {
                    // 1. Если стартовое ведро пустое, наполняем его
                    b2 = capacity_2;
                } else if b1 == capacity_1 {
                    // 2. Если другое ведро полное, опустошаем его
                    b1 = 0;
                } else {
                    // 3. Иначе переливаем из стартового в первое
                    let amount = std::cmp::min(b2, capacity_1 - b1);
                    b2 -= amount;
                    b1 += amount;
                }
            }
        }
        moves += 1;

        // Защита от бесконечного цикла, если решения не существует при заданных условиях
        if moves > 200 {
            return None;
        }
    }
}
