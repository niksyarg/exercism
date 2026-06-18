UPDATE "difference-of-squares"
SET result = CASE
WHEN property = 'squareOfSum' THEN
(number * (number +1 ) / 2) * (number * (number +1)/2)
WHEN property = 'sumOfSquares' THEN
number * (number +1) * (2 * number + 1) / 6
WHEN property = 'differenceOfSquares' THEN
((number * (number + 1) / 2) * (number * (number + 1) / 2)) - 
        (number * (number + 1) * (2 * number + 1) / 6)
END;