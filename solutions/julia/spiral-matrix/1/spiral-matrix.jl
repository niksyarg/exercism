function spiral_matrix(n)
    # Создаем пустую квадратную матрицу размера n x n, заполненную нулями
    matrix = Matrix{Int}(undef, n, n)
    
    # Инициализируем границы матрицы
    top, bottom = 1, n
    left, right = 1, n
    
    # Текущее число для записи
    current_number = 1
    
    while top <= bottom && left <= right
        # 1. Движение влево -> вправо по верхней строке
        for col in left:right
            matrix[top, col] = current_number
            current_number += 1
        end
        top += 1 # Смещаем верхнюю границу вниз
        
        # 2. Движение вверх -> вниз по правому столбцу
        for row in top:bottom
            matrix[row, right] = current_number
            current_number += 1
        end
        right -= 1 # Смещаем правую границу влево
        
        # 3. Движение вправо -> влево по нижней строке
        if top <= bottom
            for col in right:-1:left
                matrix[bottom, col] = current_number
                current_number += 1
            end
            bottom -= 1 # Смещаем нижнюю границу вверх
        end
        
        # 4. Движение вниз -> вверх по левому столбцу
        if left <= right
            for row in bottom:-1:top
                matrix[row, left] = current_number
                current_number += 1
            end
            left += 1 # Смещаем левую границу вправо
        end
    end
    
    return matrix
end
