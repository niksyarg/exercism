UPDATE collatz
SET steps = (
    WITH RECURSIVE solve(n, step_count) AS (
        -- Базовый случай: начинаем с текущего числа из таблицы collatz
        SELECT collatz.number, 0
        UNION ALL
        -- Рекурсивный случай: применяем правила Коллатца, пока n > 1
        SELECT 
            CASE 
                WHEN n % 2 = 0 THEN n / 2 
                ELSE n * 3 + 1 
            END,
            step_count + 1
        FROM solve
        WHERE n > 1
    )
    -- Выбираем максимальное количество шагов (финальное значение)
    SELECT MAX(step_count) FROM solve
);
