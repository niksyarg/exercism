
function is_valid(sides)
    a, b, c = sides
    return a > 0 && b > 0 && c > 0 && a + b >= c && b + c >= a && a + c >= b
end


function is_equilateral(sides)
    if !is_valid(sides) return false end
    a, b, c = sides
    return a == b && b == c
end


function is_isosceles(sides)
    if !is_valid(sides) return false end
    a, b, c = sides
    return a == b || b == c || a == c
end


function is_scalene(sides)
    if !is_valid(sides) return false end
    a, b, c = sides
    return a != b && b != c && a != c
end
