UPDATE "secret-handshake"
SET result = (
    SELECT 
        CASE 
            -- Если 5-й бит равен 1 (16), разворачиваем порядок действий
            WHEN (number & 16) > 0 THEN
                TRIM(
                    COALESCE(CASE WHEN (number & 8) > 0 THEN 'jump, ' ELSE '' END, '') ||
                    COALESCE(CASE WHEN (number & 4) > 0 THEN 'close your eyes, ' ELSE '' END, '') ||
                    COALESCE(CASE WHEN (number & 2) > 0 THEN 'double blink, ' ELSE '' END, '') ||
                    COALESCE(CASE WHEN (number & 1) > 0 THEN 'wink, ' ELSE '' END, ''),
                    ', '
                )
            -- Если 5-й бит равен 0, идем в обычном порядке
            ELSE
                TRIM(
                    COALESCE(CASE WHEN (number & 1) > 0 THEN 'wink, ' ELSE '' END, '') ||
                    COALESCE(CASE WHEN (number & 2) > 0 THEN 'double blink, ' ELSE '' END, '') ||
                    COALESCE(CASE WHEN (number & 4) > 0 THEN 'close your eyes, ' ELSE '' END, '') ||
                    COALESCE(CASE WHEN (number & 8) > 0 THEN 'jump, ' ELSE '' END, ''),
                    ', '
                )
        END
);
