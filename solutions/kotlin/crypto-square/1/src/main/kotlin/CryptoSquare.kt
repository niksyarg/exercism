object CryptoSquare {

    fun ciphertext(plaintext: String): String {
    
        val normalized = plaintext.filter { it.isLetterOrDigit() }.lowercase()

        if (normalized.isEmpty()) {
            return ""
        }

     
        val length = normalized.length
        val c = Math.ceil(Math.sqrt(length.toDouble())).toInt()
        val r = if (c * (c - 1) >= length) c - 1 else c

      
        val encodedChunks = (0 until c).map { col ->
            (0 until r).map { row ->
                val index = row * c + col
                if (index < length) normalized[index] else ' '
            }.joinToString("")
        }


        return encodedChunks.joinToString(" ")
    }
}