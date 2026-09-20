function annotate(arr)
    # Если массив пустой, возвращаем его же
    if isempty(arr)
        return arr
    end

    rows = length(arr)
    cols = length(arr[1])
    
    # Если строки пустые, возвращаем исходный массив
    if cols == 0
        return arr
    end

    # Переводим массив строк в двумерную матрицу символов для удобства работы
    grid = [arr[r][c] for r in 1:rows, c in 1:cols]
    result_grid = copy(grid)

    for r in 1:rows
        for c in 1:cols
            # Обрабатываем только пустые клетки
            if grid[r, c] == ' '
                flower_count = 0
                
                # Проверяем все 8 соседних ячеек
                for dr in -1:1
                    for dc in -1:1
                        if dr == 0 && dc == 0
                            continue
                        end
                        
                        nr, nc = r + dr, c + dc
                        
                        # Проверка границ массива
                        if 1 <= nr <= rows && 1 <= nc <= cols
                            if grid[nr, nc] == '*'
                                flower_count += 1
                            end
                        end
                    end
                end
                
                # Если нашли цветы рядом, записываем их количество в виде символа
                if flower_count > 0
                    result_grid[r, c] = Char('0' + flower_count)
                end
            end
        end
    end

    # Собираем матрицу символов обратно в массив строк
    return [join(result_grid[r, :]) for r in 1:rows]
end
