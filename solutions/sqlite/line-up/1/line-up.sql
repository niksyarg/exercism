UPDATE "line-up"
SET result = name || ', you are the ' || number || 
    CASE 
        WHEN number % 100 IN (11, 12, 13) THEN 'th'
        WHEN number % 10 = 1 THEN 'st'
        WHEN number % 10 = 2 THEN 'nd'
        WHEN number % 10 = 3 THEN 'rd'
        ELSE 'th'
    END || ' customer we serve today. Thank you!';
