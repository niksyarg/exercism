UPDATE color_code
SET result = CASE color
    WHEN 'black'  THEN 0
    WHEN 'brown'  THEN 1
    WHEN 'red'    THEN 2
    WHEN 'orange' THEN 3
    WHEN 'yellow' THEN 4
    WHEN 'green'  THEN 5
    WHEN 'blue'   THEN 6
    WHEN 'violet' THEN 7
    WHEN 'grey'   THEN 8
    WHEN 'white'  THEN 9
END;
