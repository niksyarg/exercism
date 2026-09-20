UPDATE acronym
SET result = (
    WITH RECURSIVE
    -- 1. Подготавливаем строку: заменяем дефисы на пробелы и переводим в верхний регистр
    prepared AS (
        SELECT 
            phrase,
            UPPER(REPLACE(phrase, '-', ' ')) || ' ' AS clean_text
    ),
    -- 2. Перебираем строку по одному слову
    tokens AS (
        -- Начальное состояние: берем первое слово и остаток строки
        SELECT 
            phrase,
            SUBSTR(clean_text, 1, INSTR(clean_text, ' ') - 1) AS word,
            SUBSTR(clean_text, INSTR(clean_text, ' ') + 1) AS remainder
        FROM prepared
        
        UNION ALL
        
        -- Шаг рекурсии: отделяем следующее слово, пока строка не кончится
        SELECT 
            phrase,
            SUBSTR(remainder, 1, INSTR(remainder, ' ') - 1) AS word,
            SUBSTR(remainder, INSTR(remainder, ' ') + 1) AS remainder
        FROM tokens
        WHERE remainder != ''
    ),
    -- 3. Очищаем слова от знаков препинания и берем первую букву
    letters AS (
        SELECT 
            phrase,
            -- Удаляем символы вроде апострофов, запятых или восклицательных знаков
            SUBSTR(LTRIM(word, '.,!?_*"''()[]{}'), 1, 1) AS first_letter
        FROM tokens
        WHERE word != ''
    )
    -- 4. Склеиваем все первые буквы обратно в одно слово для каждой фразы
    SELECT GROUP_CONCAT(first_letter, '')
    FROM letters
    WHERE letters.phrase = acronym.phrase
    GROUP BY phrase
);
