pub fn is_valid(code: &str) -> bool {
    let cleaned: String = code.chars().filter(|c| !c.is_whitespace()).collect();

    if cleaned.len() <= 1 {
        return false;
    }

    let mut sum = 0;
    let mut double = false;

    for c in cleaned.chars().rev() {
        let digit = match c.to_digit(10) {
            Some(d) => d,
            None => return false, // Найден нецифровой символ
        };

        let mut val = digit;
        if double {
            val *= 2;
            if val > 9 {
                val -= 9;
            }
        }
        sum += val;
        double = !double;
    }

    sum % 10 == 0
}
