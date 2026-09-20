function matrix(strmatrix)
    # 1. Разделяем строку на отдельные текстовые строки по символу новой строки
    lines = split(strip(strmatrix), '\n')
    
    # 2. Преобразуем каждую строку в вектор чисел
    raw_rows = [parse.(Int, split(ln)) for ln in lines]
    
    # 3. Собираем двумерную матрицу, объединяя строки по вертикали
    mat = vcat(raw_rows'...)
    
    # 4. Формируем список строк матрицы
    rows = [mat[i, :] for i in 1:size(mat, 1)]
    
    # 5. Формируем список столбцов матрицы
    columns = [mat[:, j] for j in 1:size(mat, 2)]
    
    return rows, columns
end
