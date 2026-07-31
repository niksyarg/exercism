function encode(input)
    processed = Char[]

    for c in lowercase(input)
        if isletter(c) && isascii(c)
            push!(processed, 'z' - (c - 'a'))
        elseif isnumeric(c)
            push!(processed, c)
        end
    end
    

    result = IOBuffer()
    for (i, c) in enumerate(processed)
        if i > 1 && (i - 1) % 5 == 0
            print(result, ' ')
        end
        print(result, c)
    end
    
    return String(take!(result))
end

function decode(input)
    result = IOBuffer()
    
   
    for c in lowercase(input)
        if isletter(c) && isascii(c)
            print(result, 'z' - (c - 'a'))
        elseif isnumeric(c)
            print(result, c)
        end
    end
    
    return String(take!(result))
end
