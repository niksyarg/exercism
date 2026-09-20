function sum_of_multiples(limit, factors)
    multiples = Set{Int}()
    
    for f in factors
        if f > 0
            for i in f:f:(limit - 1)
                push!(multiples, i)
            end
        end
    end
    
    return sum(multiples; init=0)
end
