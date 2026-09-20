
function distance(a, b)

    if length(a) != length(b)
        throw(ArgumentError("Строки должны быть одинаковой длины"))
    end


    count = 0
    for i in 1:length(a)
        if a[i] != b[i]
            count += 1
        end
    end

    return count
end
