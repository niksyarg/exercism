function ispangram(input)
    # Приводим строку к нижнему регистру
    lowercase_input = lowercase(input)
    
    # Проверяем, что каждая буква от 'a' до 'z' присутствует в строке
    return all(c -> c in lowercase_input, 'a':'z')
end
