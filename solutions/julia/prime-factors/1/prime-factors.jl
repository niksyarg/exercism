function prime_factors(n)
    factors = Int[]
    divisor = 2
    
    while n > 1
        while n % divisor == 0
            push!(factors, divisor)
            n = div(n, divisor)
        end
        divisor += 1
    end
    
    return factors
end
