use std::collections::HashSet;

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct Palindrome {
    value: u64,
    factors: HashSet<(u64, u64)>,
}

impl Palindrome {
    /// Создает новый экземпляр Palindrome с упорядоченными парами множителей
    pub fn new(value: u64, factor1: u64, factor2: u64) -> Self {
        let mut factors = HashSet::new();
        // Сохраняем множители так, чтобы меньший всегда был на первом месте (для корректных тестов)
        if factor1 <= factor2 {
            factors.insert((factor1, factor2));
        } else {
            factors.insert((factor2, factor1));
        }
        Palindrome { value, factors }
    }

    /// Возвращает значение палиндрома
    pub fn value(&self) -> u64 {
        self.value
    }

    /// Возвращает все пары множителей этого палиндрома
    pub fn into_factors(self) -> HashSet<(u64, u64)> {
        self.factors
    }
}

/// Проверяет, является ли число палиндромом
fn is_palindrome(num: u64) -> bool {
    let s = num.to_string();
    s.chars().eq(s.chars().rev())
}

/// Находит минимальный и максимальный палиндромы, являющиеся произведением двух чисел из диапазона [min, max]
pub fn palindrome_products(min: u64, max: u64) -> Option<(Palindrome, Palindrome)> {
    let mut min_palindrome: Option<Palindrome> = None;
    let mut max_palindrome: Option<Palindrome> = None;

    // Перебираем все возможные пары множителей в диапазоне [min, max]
    for i in min..=max {
        for j in i..=max {
            let product = i * j;

            if is_palindrome(product) {
                // Обработка минимального палиндрома
                match &mut min_palindrome {
                    None => min_palindrome = Some(Palindrome::new(product, i, j)),
                    Some(p) if product < p.value => *p = Palindrome::new(product, i, j),
                    Some(p) if product == p.value => {
                        p.factors.insert((i, j));
                    }
                    _ => {}
                }

                // Обработка максимального палиндрома
                match &mut max_palindrome {
                    None => max_palindrome = Some(Palindrome::new(product, i, j)),
                    Some(p) if product > p.value => *p = Palindrome::new(product, i, j),
                    Some(p) if product == p.value => {
                        p.factors.insert((i, j));
                    }
                    _ => {}
                }
            }
        }
    }

    // Если палиндромы найдены, возвращаем кортеж (минимальный, максимальный)
    match (min_palindrome, max_palindrome) {
        (Some(min_p), Some(max_p)) => Some((min_p, max_p)),
        _ => None,
    }
}
