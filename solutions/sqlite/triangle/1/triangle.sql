

UPDATE triangle
SET result = CASE
    WHEN side_a <= 0 OR side_b <= 0 OR side_c <= 0 OR
         side_a + side_b < side_c OR
         side_a + side_c < side_b OR
         side_b + side_c < side_a THEN 0
 
    WHEN property = 'equilateral' THEN (side_a = side_b AND side_b = side_c)
    WHEN property = 'isosceles'   THEN (side_a = side_b OR side_b = side_c OR side_a = side_c)
    WHEN property = 'scalene'     THEN (side_a != side_b AND side_b != side_c AND side_a != side_c)
    
    ELSE 0
END;
