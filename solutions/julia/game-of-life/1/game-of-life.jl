function gameoflife(matrix)
    # Проверка на пустую матрицу
    if isempty(matrix)
        return matrix
    end

    rows, cols = size(matrix)
    next_matrix = zeros(Int, rows, cols)

    for r in 1:rows
        for c in 1:cols
            # Подсчет живых соседей для текущей ячейки (r, c)
            live_neighbors = 0
            
            for dr in -1:1
                for dc in -1:1
                    # Пропускаем саму текущую ячейку
                    if dr == 0 && dc == 0
                        continue
                    end
                    
                    nr = r + dr
                    nc = c + dc
                    
                    # Проверяем, не выходят ли координаты за границы матрицы
                    if nr >= 1 && nr <= rows && nc >= 1 && nc <= cols
                        live_neighbors += matrix[nr, nc]
                    end
                end
            end

            # Применение правил игры к текущей ячейке
            if matrix[r, c] == 1
                # Живая ячейка остается живой, если у нее 2 или 3 живых соседа
                if live_neighbors == 2 || live_neighbors == 3
                    next_matrix[r, c] = 1
                else
                    next_matrix[r, c] = 0
                end
            else
                # Мертвая ячейка оживает, если у нее ровно 3 живых соседа
                if live_neighbors == 3
                    next_matrix[r, c] = 1
                else
                    next_matrix[r, c] = 0
                end
            end
        end
    end

    return next_matrix
end
