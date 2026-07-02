object ETL {
    fun transform(source: Map<Int, Collection<Char>>): Map<Char, Int> {
        return source.flatMap { (points, letters) ->
            letters.map { char -> 
                char.lowercaseChar() to points 
            }
        }.toMap()
    }
}

