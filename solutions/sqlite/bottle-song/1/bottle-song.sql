UPDATE "bottle-song"
SET result = (
    WITH RECURSIVE
    numbers(n, word) AS (
        VALUES (10, 'Ten'), (9, 'Nine'), (8, 'Eight'), (7, 'Seven'), (6, 'Six'),
               (5, 'Five'), (4, 'Four'), (3, 'Three'), (2, 'Two'), (1, 'One'), (0, 'no')
    ),
    verses(step, current_bottles) AS (
        SELECT 1, start_bottles FROM "bottle-song" b WHERE b.rowid = "bottle-song".rowid
        UNION ALL
        SELECT step + 1, current_bottles - 1 FROM verses 
        WHERE step < (SELECT take_down FROM "bottle-song" b WHERE b.rowid = "bottle-song".rowid)
    )
    SELECT GROUP_CONCAT(
        n1.word || ' green bottle' || (CASE WHEN v.current_bottles = 1 THEN '' ELSE 's' END) || ' hanging on the wall,' || char(10) ||
        n1.word || ' green bottle' || (CASE WHEN v.current_bottles = 1 THEN '' ELSE 's' END) || ' hanging on the wall,' || char(10) ||
        'And if one green bottle should accidentally fall,' || char(10) ||
        'There''ll be ' || LOWER(n2.word) || ' green bottle' || (CASE WHEN v.current_bottles - 1 = 1 THEN '' ELSE 's' END) || ' hanging on the wall.',
        char(10) || char(10)
    )
    FROM verses v
    JOIN numbers n1 ON v.current_bottles = n1.n
    JOIN numbers n2 ON v.current_bottles - 1 = n2.n
);
