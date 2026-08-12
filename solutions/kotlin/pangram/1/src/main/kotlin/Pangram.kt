object Pangram {

    fun isPangram(input: String): Boolean {
        return ('a'..'z').all { char -> 
            input.contains(char, ignoreCase = true) 
        }
    }
}
