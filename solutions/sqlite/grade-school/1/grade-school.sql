UPDATE "grade-school"
SET result = (
    WITH 
    -- 1. Extract students with their index, name, and grade from JSON input
    raw_students AS (
        SELECT 
            j.key AS idx,
            json_extract(j.value, '$[0]') AS name,
            json_extract(j.value, '$[1]') AS grade
        FROM json_each(input, '$.students') j
    ),
    
    -- 2. Identify the first occurrence of each student (duplicates are invalid)
    valid_students AS (
        SELECT 
            idx, 
            name, 
            grade,
            (ROW_NUMBER() OVER (PARTITION BY name ORDER BY idx)) = 1 AS is_first
        FROM raw_students
    )

    -- 3. Construct the JSON result array based on the property requested
    SELECT COALESCE(
        CASE property
            WHEN 'add' THEN (
                SELECT json_group_array(
                    CASE WHEN is_first THEN json('true') ELSE json('false') END
                )
                FROM valid_students
                ORDER BY idx
            )
            WHEN 'roster' THEN (
                SELECT json_group_array(name)
                FROM (
                    SELECT name
                    FROM valid_students
                    WHERE is_first = 1
                    ORDER BY grade ASC, name ASC
                )
            )
            WHEN 'grade' THEN (
                SELECT json_group_array(name)
                FROM (
                    SELECT name
                    FROM valid_students
                    WHERE is_first = 1 
                      AND grade = COALESCE(
                          json_extract(input, '$.desiredGrade'), 
                          json_extract(input, '$.grade')
                      )
                    ORDER BY name ASC
                )
            )
        END,
        json_array()
    )
);