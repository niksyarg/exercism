UPDATE "space-age"
SET result = ROUND(seconds / (31557600.0 * CASE planet
    WHEN 'Mercury' THEN 0.2408467
    WHEN 'Venus'   THEN 0.61519726
    WHEN 'Earth'   THEN 1.0
    WHEN 'Mars'    THEN 1.8808158
    WHEN 'Jupiter' THEN 11.862615
    WHEN 'Saturn'  THEN 29.447498
    WHEN 'Uranus'  THEN 84.016846
    WHEN 'Neptune' THEN 164.79132
END), 2);
