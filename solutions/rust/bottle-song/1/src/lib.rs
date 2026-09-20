const NUMBERS: [&str; 11] = [
    "no", "One", "Two", "Three", "Four", 
    "Five", "Six", "Seven", "Eight", "Nine", "Ten"
];

fn bottle_str(n: u32) -> &'static str {
    if n == 1 { "bottle" } else { "bottles" }
}

pub fn recite(start_bottles: u32, take_down: u32) -> String {
    (0..take_down)
        .map(|i| {
            let current = start_bottles - i;
            let next = current - 1;
            format!(
                "{} green {} hanging on the wall,\n\
                 {} green {} hanging on the wall,\n\
                 And if one green bottle should accidentally fall,\n\
                 There'll be {} green {} hanging on the wall.",
                NUMBERS[current as usize],
                bottle_str(current),
                NUMBERS[current as usize],
                bottle_str(current),
                NUMBERS[next as usize].to_lowercase(),
                bottle_str(next),
            )
        })
        .collect::<Vec<_>>()
        .join("\n\n")
}
