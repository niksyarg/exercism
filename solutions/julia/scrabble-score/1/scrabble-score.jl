function score(str)
    # 1. Создаем словарь, где для каждой буквы сопоставлено ее количество очков
    scores = Dict{Char, Int}()
    
    # Заполняем словарь на основе таблицы правил
    for c in "AEIOULNRST" scores[c] = 1 end
    for c in "DG"         scores[c] = 2 end
    for c in "BCMP"       scores[c] = 3 end
    for c in "FHVWY"      scores[c] = 4 end
    for c in "K"          scores[c] = 5 end
    for c in "JX"         scores[c] = 8 end
    for c in "QZ"         scores[c] = 10 end
    
    # 2. Подсчитываем общую сумму очков для строки
    total = 0
    for char in str
        # Приводим символ к верхнему регистру, так как в словаре только заглавные буквы
        upper_char = uppercase(char)
        # Прибавляем очки, если символ есть в словаре (иначе 0)
        total += get(scores, upper_char, 0)
    end
    
    return total
end
