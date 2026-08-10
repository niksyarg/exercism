UPDATE etl
SET result = (
    SELECT json_group_object(letter, score)
    FROM (
        SELECT 
            LOWER(letter.value) AS letter, 
            CAST(score_pair.key AS INTEGER) AS score
        FROM json_each(etl.input) AS score_pair,
             json_each(score_pair.value) AS letter
        ORDER BY letter ASC
    )
);