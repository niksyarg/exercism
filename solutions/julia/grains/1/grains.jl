
function on_square(square)
    if square < 1 || square > 64
        throw(DomainError(square, "Square must be between 1 and 64"))
    end

    return Int128(1) << (square - 1)
end


function total_after(square)
    if square < 1 || square > 64
        throw(DomainError(square, "Square must be between 1 and 64"))
    end
    return (Int128(1) << square) - 1
end
