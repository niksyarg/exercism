UPDATE darts
SET score = CASE
WHEN (x*x + y*y) <= 1 THEN 10
WHEN (x*x + y*y) <= 25 THEN 5
WHEN (x*x + y*y) <= 100 THEN 1
ELSE 0
END;
