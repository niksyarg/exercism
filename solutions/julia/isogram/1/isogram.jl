function isisogram(s)

    clean_s = lowercase(s)
    

    seen_chars = Set{Char}()
    
    for char in clean_s
    
        if char == ' ' || char == '-'
            continue
        end

        if char in seen_chars
            return false
        end
        
      
        push!(seen_chars, char)
    end
    
    return true
end
