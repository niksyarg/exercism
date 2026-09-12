UPDATE "eliuds-eggs"
SET result = (
    WITH RECURSIVE count_bits(n, bits) AS (
        -- Начальное состояние: берем исходное число и устанавливаем счетчик единиц в 0
        SELECT number, 0
        UNION ALL
        -- Рекурсивный шаг: прибавляем остаток от деления на 2 (0 или 1) и делим число нацело на 2
        SELECT n / 2, bits + (n % 2)
        FROM count_bits
        WHERE n > 0
    )
    SELECT bits 
    FROM count_bits 
    WHERE n = 0
);
