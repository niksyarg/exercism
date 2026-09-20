function luhn(cardnum)
    # 1. Удаляем все пробелы из строки
    cleaned = replace(cardnum, " " => "")
    
    # 2. Строки длиной 1 или меньше невалидны
    if length(cleaned) <= 1
        return false
    end
    
    # 3. Проверяем, что строка состоит только из цифр
    if !all(isdigit, cleaned)
        return false
    end
    
    total_sum = 0
    # Идем с конца строки к началу
    # Переменная double флаг: удваивать ли текущую цифру (начинаем с false для последней цифры)
    double = false
    
    for i in length(cleaned):-1:1
        # Конвертируем символ в число
        digit = parse(Int, cleaned[i])
        
        if double
            digit *= 2
            if digit > 9
                digit -= 9
            end
        end
        
        total_sum += digit
        double = !double  # Меняем флаг для следующей цифры
    end
    
    # 4. Номер валиден, если сумма делится на 10 без остатка
    return total_sum % 10 == 0
end
