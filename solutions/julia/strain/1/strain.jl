function keep(values, predicate)
    result = []
    for x in values
        if predicate(x)
            push!(result, x)
        end
    end
    return result
end

function discard(values, predicate)
    result = []
    for x in values
        if !predicate(x)
            push!(result, x)
        end
    end
    return result
end
