pub fn primes_up_to(upper_bound: u64) -> Vec<u64> {
    if upper_bound < 2 {
        return Vec::new();
    }

    let limit = upper_bound as usize;
    // Создаем вектор логических значений. Индекс соответствует числу.
    // Изначально считаем все числа от 2 и далее простыми (true).
    let mut is_prime = vec![true; limit + 1];
    is_prime[0] = false;
    is_prime[1] = false;

    // Оптимизация: идем до квадратного корня из limit
    let mut p = 2;
    while p * p <= limit {
        if is_prime[p] {
            // Вычеркиваем все кратные числа, начиная с p * p
            let mut step = p * p;
            while step <= limit {
                is_prime[step] = false;
                step += p;
            }
        }
        p += 1;
    }

    // Собираем все оставшиеся unmarked (true) числа в результирующий вектор
    is_prime
        .iter()
        .enumerate()
        .filter(|&(_, &prime)| prime)
        .map(|(idx, _)| idx as u64)
        .collect()
}
