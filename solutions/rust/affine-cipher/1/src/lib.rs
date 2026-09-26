#[derive(Debug, Eq, PartialEq)]
pub enum AffineCipherError {
    NotCoprime(i32),
}

/// Вычисляет наибольший общий делитель (НОД)
fn gcd(x: i32, y: i32) -> i32 {
    if y == 0 { x.abs() } else { gcd(y, x % y) }
}

/// Находит модульное обратное число (MMI) для 'a' по модулю 'm'
fn mod_inverse(a: i32, m: i32) -> Option<i32> {
    for x in 1..m {
        if (a * x) % m == 1 {
            return Some(x);
        }
    }
    None
}

/// Кодирует исходный текст с помощью аффинного шифра с ключами (a, b)
pub fn encode(plaintext: &str, a: i32, b: i32) -> Result<String, AffineCipherError> {
    if gcd(a, 26) != 1 {
        return Err(AffineCipherError::NotCoprime(a));
    }

    let mut result = String::new();
    let mut count = 0;

    for c in plaintext.to_lowercase().chars() {
        if c.is_ascii_alphabetic() {
            if count > 0 && count % 5 == 0 {
                result.push(' ');
            }
            let x = (c as i32) - ('a' as i32);
            let encoded_char = (((a * x + b) % 26 + 26) % 26) as u8 + b'a';
            result.push(encoded_char as char);
            count += 1;
        } else if c.is_ascii_digit() {
            if count > 0 && count % 5 == 0 {
                result.push(' ');
            }
            result.push(c);
            count += 1;
        }
    }

    Ok(result)
}

/// Декодирует зашифрованный текст с помощью аффинного шифра с ключами (a, b)
pub fn decode(ciphertext: &str, a: i32, b: i32) -> Result<String, AffineCipherError> {
    if gcd(a, 26) != 1 {
        return Err(AffineCipherError::NotCoprime(a));
    }

    // Так как gcd(a, 26) == 1, mod_inverse гарантированно вернет Some
    let a_inv = mod_inverse(a, 26).unwrap();
    let mut result = String::new();

    for c in ciphertext.chars() {
        if c.is_ascii_alphabetic() {
            let y = (c.to_ascii_lowercase() as i32) - ('a' as i32);
            let decoded_char = (((a_inv * (y - b)) % 26 + 26) % 26) as u8 + b'a';
            result.push(decoded_char as char);
        } else if c.is_ascii_digit() {
            result.push(c);
        }
    }

    Ok(result)
}
