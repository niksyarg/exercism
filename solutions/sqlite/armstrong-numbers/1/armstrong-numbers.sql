UPDATE "armstrong-numbers"
SET result = (
    CASE length(number)
        WHEN 1 THEN 
            number = power(cast(substr(number, 1, 1) as INT), 1)
        WHEN 2 THEN 
            number = power(cast(substr(number, 1, 1) as INT), 2) + 
                     power(cast(substr(number, 2, 1) as INT), 2)
        WHEN 3 THEN 
            number = power(cast(substr(number, 1, 1) as INT), 3) + 
                     power(cast(substr(number, 2, 1) as INT), 3) + 
                     power(cast(substr(number, 3, 1) as INT), 3)
        WHEN 4 THEN 
            number = power(cast(substr(number, 1, 1) as INT), 4) + 
                     power(cast(substr(number, 2, 1) as INT), 4) + 
                     power(cast(substr(number, 3, 1) as INT), 4) + 
                     power(cast(substr(number, 4, 1) as INT), 4)
        WHEN 5 THEN 
            number = power(cast(substr(number, 1, 1) as INT), 5) + 
                     power(cast(substr(number, 2, 1) as INT), 5) + 
                     power(cast(substr(number, 3, 1) as INT), 5) + 
                     power(cast(substr(number, 4, 1) as INT), 5) + 
                     power(cast(substr(number, 5, 1) as INT), 5)
        WHEN 6 THEN 
            number = power(cast(substr(number, 1, 1) as INT), 6) + 
                     power(cast(substr(number, 2, 1) as INT), 6) + 
                     power(cast(substr(number, 3, 1) as INT), 6) + 
                     power(cast(substr(number, 4, 1) as INT), 6) + 
                     power(cast(substr(number, 5, 1) as INT), 6) + 
                     power(cast(substr(number, 6, 1) as INT), 6)
        WHEN 7 THEN 
            number = power(cast(substr(number, 1, 1) as INT), 7) + 
                     power(cast(substr(number, 2, 1) as INT), 7) + 
                     power(cast(substr(number, 3, 1) as INT), 7) + 
                     power(cast(substr(number, 4, 1) as INT), 7) + 
                     power(cast(substr(number, 5, 1) as INT), 7) + 
                     power(cast(substr(number, 6, 1) as INT), 7) + 
                     power(cast(substr(number, 7, 1) as INT), 7)
        ELSE 0
    END
);
