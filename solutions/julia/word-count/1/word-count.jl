function wordcount(sentence)

    lowercase_sentence = lowercase(sentence)
    

    words = map(m -> m.match, eachmatch(r"\w+('\w+)?", lowercase_sentence))
    
 
    counts = Dict{String, Int}()
    for word in words
        counts[word] = get(counts, word, 0) + 1
    end
    
    return counts
end
