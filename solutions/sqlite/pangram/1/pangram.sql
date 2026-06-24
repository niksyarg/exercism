UPDATE pangram
SET result = (
    SELECT COUNT(DISTINCT SUBSTR(LOWER(sentence), n.pos, 1)) = 26
    FROM (
        WITH RECURSIVE seq(n) AS (
            SELECT 1 UNION ALL SELECT n + 1 FROM seq WHERE n < 1000
        )
        SELECT n AS pos FROM seq
    ) n
    WHERE SUBSTR(LOWER(sentence), n.pos, 1) BETWEEN 'a' AND 'z'
);
