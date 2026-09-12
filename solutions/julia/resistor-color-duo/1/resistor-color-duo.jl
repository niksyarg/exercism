function colorcode(colors)
    # Словарь сопоставления цветов и их числовых значений
    color_values = Dict(
        "black"  => 0,
        "brown"  => 1,
        "red"    => 2,
        "orange" => 3,
        "yellow" => 4,
        "green"  => 5,
        "blue"   => 6,
        "violet" => 7,
        "grey"   => 8,
        "white"  => 9
    )
    
    # Получаем значения для первых двух цветов
    first_digit = color_values[colors[1]]
    second_digit = color_values[colors[2]]
    
    # Объединяем их в двузначное число
    return first_digit * 10 + second_digit
end
