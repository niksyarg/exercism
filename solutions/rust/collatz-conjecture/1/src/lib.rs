pub fn collatz(n: u64) -> Option<u64> {
    if n == 0 {
        return None;
    }
    
    let mut current = n;
    let mut steps = 0;
    
    while current != 1 {
        if current % 2 == 0 {
            current /= 2;
        } else {
            // Проверка на переполнение при умножении на 3 и прибавлении 1
            current = current.checked_mul(3)?.checked_add(1)?;
        }
        steps += 1;
    }
    
    Some(steps)
}
