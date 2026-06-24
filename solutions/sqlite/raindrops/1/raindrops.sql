
UPDATE raindrops
SET sound = CASE 
    WHEN number % 3 = 0 OR number % 5 = 0 OR number % 7 = 0 THEN
        (CASE WHEN number % 3 = 0 THEN 'Pling' ELSE '' END) ||
        (CASE WHEN number % 5 = 0 THEN 'Plang' ELSE '' END) ||
        (CASE WHEN number % 7 = 0 THEN 'Plong' ELSE '' END)
    ELSE 
        CAST(number AS TEXT)
END;
