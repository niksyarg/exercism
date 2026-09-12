function sieve(limit)
 
    if limit < 2
        return Int[]
    end

  
    is_prime = fill(true, limit)
    is_prime[1] = false # 1 — не простое число


    for i in 2:isqrt(limit)
        if is_prime[i]
       
            for j in (i^2):i:limit
                is_prime[j] = false
            end
        end
    end


    return [i for i in 1:limit if is_prime[i]]
end
