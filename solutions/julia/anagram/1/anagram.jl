function detect_anagrams(subject::AbstractString, candidates::AbstractVector{<:AbstractString})

    sub_lower = lowercase(subject)
    

    sub_sorted = sort(collect(sub_lower))
    

    filter(candidates) do candidate
        cand_lower = lowercase(candidate)
        
      
        cand_lower != sub_lower && sort(collect(cand_lower)) == sub_sorted
    end
end
