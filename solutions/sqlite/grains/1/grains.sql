UPDATE grains
SET result = CASE
WHEN task = 'single-square' THEN POWER(2, square -1)
WHEN task = 'total' THEN POWER(2, 64) - 1
END;