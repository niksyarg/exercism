function triangle(n)
    n < 0 && throw(DomainError(n, "Количество строк не может быть отрицательным"))
    n == 0 && return []
    
    rows = [[1]]
    for i in 2:n
        prev = rows[end]

        current = [1; [prev[j] + prev[j+1] for j in 1:(i-2)]; 1]
        push!(rows, current)
    end
    
    return rows
end
