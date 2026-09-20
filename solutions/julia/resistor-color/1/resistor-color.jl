const COLOR_LIST = [
    "black", "brown", "red", "orange", "yellow", 
    "green", "blue", "violet", "grey", "white"
]

function colorcode(color)

    return findfirst(==(color), COLOR_LIST) - 1
end

function colors()
    # Возвращаем весь список цветов
    return COLOR_LIST
end
