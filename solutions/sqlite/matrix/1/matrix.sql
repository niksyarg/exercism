WITH RECURSIVE
-- Шаг 1: Разделяем исходную строку на отдельные строки матрицы по символу переноса строки (\n)
rows_split AS (
    SELECT 
        rowid AS matrix_id,
        property,
        "index" AS target_index,
        1 AS row_num,
        instr(string || x'0a', x'0a') AS pos,
        substr(string || x'0a', 1, instr(string || x'0a', x'0a') - 1) AS row_str,
        substr(string || x'0a', instr(string || x'0a', x'0a') + 1) AS rest
    FROM matrix
    UNION ALL
    SELECT 
        matrix_id,
        property,
        target_index,
        row_num + 1,
        instr(rest, x'0a'),
        substr(rest, 1, instr(rest, x'0a') - 1),
        substr(rest, instr(rest, x'0a') + 1)
    FROM rows_split
    WHERE rest <> ''
),

-- Шаг 2: Очищаем строки от лишних пробелов по краям
rows_cleaned AS (
    SELECT matrix_id, property, target_index, row_num, trim(row_str) AS row_str
    FROM rows_split
    WHERE trim(row_str) <> ''
),

-- Шаг 3: Разбиваем каждую строку матрицы на отдельные числа (колонки) по пробелам
cells_split AS (
    SELECT 
        matrix_id,
        property,
        target_index,
        row_num,
        1 AS col_num,
        instr(row_str || ' ', ' ') AS pos,
        substr(row_str || ' ', 1, instr(row_str || ' ', ' ') - 1) AS cell_val,
        substr(row_str || ' ', instr(row_str || ' ', ' ') + 1) AS rest
    FROM rows_cleaned
    UNION ALL
    SELECT 
        matrix_id,
        property,
        target_index,
        row_num,
        col_num + 1,
        instr(rest, ' '),
        substr(rest, 1, instr(rest, ' ') - 1),
        substr(rest, instr(rest, ' ') + 1)
    FROM cells_split
    WHERE rest <> ''
),

-- Шаг 4: Очищаем ячейки от пустых значений (возникающих из-за множественных пробелов)
cells_cleaned AS (
    SELECT matrix_id, property, target_index, row_num, col_num, CAST(trim(cell_val) AS INTEGER) AS val
    FROM cells_split
    WHERE trim(cell_val) <> ''
),

-- Шаг 5: Агрегируем данные в JSON-массив в зависимости от запрашиваемого свойства (row или column)
final_json AS (
    SELECT 
        matrix_id,
        json_group_array(val) AS json_res
    FROM cells_cleaned
    WHERE 
        (property = 'row' AND row_num = target_index) OR
        (property = 'column' AND col_num = target_index)
    GROUP BY matrix_id
)

-- Шаг 6: Обновляем основную таблицу полученными результатами
UPDATE matrix
SET result = (
    SELECT json_res 
    FROM final_json 
    WHERE final_json.matrix_id = matrix.rowid
);
