pub fn square_of_sum(n: u32) -> u32 {
    // Формула суммы первых N чисел: (n * (n + 1)) / 2
    let sum = (n * (n + 1)) / 2;
    sum * sum
}

pub fn sum_of_squares(n: u32) -> u32 {
    // Формула суммы квадратов первых N чисел: (n * (n + 1) * (2n + 1)) / 6
    (n * (n + 1) * (2 * n + 1)) / 6
}

pub fn difference(n: u32) -> u32 {
    // Разность между квадратом суммы и суммой квадратов
    square_of_sum(n) - sum_of_squares(n)
}
