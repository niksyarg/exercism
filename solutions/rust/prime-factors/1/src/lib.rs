pub fn factors(mut n: u64) -> Vec<u64> {
    let mut result = Vec::new();
    let mut divisor = 2;

    while n > 1 {
        while n % divisor == 0 {
            result.push(divisor);
            n /= divisor;
        }
        divisor += 1;
        
        // Оптимизация: если квадрат делителя больше n, а n всё еще > 1,
        // то оставшееся n само по себе является простым числом.
        if divisor * divisor > n && n > 1 {
            result.push(n);
            break;
        }
    }

    result
}
