function acronym(phrase)

    cleaned = replace(phrase, '-' => ' ')
    

    cleaned = replace(cleaned, r"\p{P}" => "")
    

    words = split(cleaned)
    
    
    return uppercase(join(first(word) for word in words))
end
