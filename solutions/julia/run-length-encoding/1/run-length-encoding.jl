function encode(s)
    
    matches = eachmatch(r"(.)\1*", s)
    
    result = IOBuffer()
    for m in matches
        str = m.match
        len = length(str)
    
        if len > 1
            print(result, len)
        end
        print(result, str[1])
    end
    
    return take!(result) |> String
end

function decode(s)

    matches = eachmatch(r"(\d*)(.)", s)
    
    result = IOBuffer()
    for m in matches
        count_str = m.captures[1]
        char = m.captures[2]
        
   
        count = isempty(count_str) ? 1 : parse(Int, count_str)
        print(result, char ^ count)
    end
    
    return take!(result) |> String
end
