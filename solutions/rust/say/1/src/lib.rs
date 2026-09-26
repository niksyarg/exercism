pub fn encode(n: u64) -> String {
    if n == 0 {
        return "zero".to_string();
    }

    let units = [
        "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
        "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
        "seventeen", "eighteen", "nineteen",
    ];

    let tens = [
        "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety",
    ];

    let scales = ["", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion"];

    let mut num = n;
    let mut parts = Vec::new();
    let mut scale_idx = 0;

    while num > 0 {
        let chunk = (num % 1000) as usize;
        if chunk > 0 {
            let mut chunk_str = translate_chunk(chunk, &units, &tens);
            if scale_idx > 0 {
                chunk_str.push_str(&format!(" {}", scales[scale_idx]));
            }
            parts.push(chunk_str);
        }
        num /= 1000;
        scale_idx += 1;
    }

    parts.reverse();
    parts.join(" ")
}

fn translate_chunk(n: usize, units: &[&str], tens: &[&str]) -> String {
    let mut result = Vec::new();
    let hundreds = n / 100;
    let remainder = n % 100;

    if hundreds > 0 {
        result.push(format!("{} hundred", units[hundreds]));
    }

    if remainder > 0 {
        if remainder < 20 {
            result.push(units[remainder].to_string());
        } else {
            let t = remainder / 10;
            let u = remainder % 10;
            if u > 0 {
                result.push(format!("{}-{}", tens[t], units[u]));
            } else {
                result.push(tens[t].to_string());
            }
        }
    }

    result.join(" ")
}
