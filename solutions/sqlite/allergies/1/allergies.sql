
UPDATE allergies
SET result = CASE 
    WHEN (score & (
        CASE item
            WHEN 'eggs' THEN 1
            WHEN 'peanuts' THEN 2
            WHEN 'shellfish' THEN 4
            WHEN 'strawberries' THEN 8
            WHEN 'tomatoes' THEN 16
            WHEN 'chocolate' THEN 32
            WHEN 'pollen' THEN 64
            WHEN 'cats' THEN 128
            ELSE 0
        END
    )) > 0 THEN 'true'
    ELSE 'false'
END
WHERE task = 'allergicTo';


UPDATE allergies
SET result = (
    SELECT COALESCE(GROUP_CONCAT(name, ', '), '')
    FROM (
        SELECT 'eggs' AS name, 1 AS val UNION ALL
        SELECT 'peanuts', 2 UNION ALL
        SELECT 'shellfish', 4 UNION ALL
        SELECT 'strawberries', 8 UNION ALL
        SELECT 'tomatoes', 16 UNION ALL
        SELECT 'chocolate', 32 UNION ALL
        SELECT 'pollen', 64 UNION ALL
        SELECT 'cats', 128
    )
    WHERE (allergies.score & val) > 0
)
WHERE task = 'list';
