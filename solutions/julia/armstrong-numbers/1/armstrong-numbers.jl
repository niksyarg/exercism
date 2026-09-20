function isarmstrong(n)

    digits_str = string(n)
    num_digits = length(digits_str)
    

    sum_of_powers = sum(parse(Int, d)^num_digits for d in digits_str)
    

    return sum_of_powers == n
end
