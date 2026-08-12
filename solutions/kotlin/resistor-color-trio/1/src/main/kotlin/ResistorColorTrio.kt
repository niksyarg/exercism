import kotlin.math.pow

object ResistorColorTrio {

    fun text(vararg input: Color): String {
     
        val ohms = (input[0].ordinal * 10 + input[1].ordinal) * 10.0.pow(input[2].ordinal).toLong()

        
        return when {
            ohms >= 1_000_000_000 -> "${ohms / 1_000_000_000} gigaohms"
            ohms >= 1_000_000 -> "${ohms / 1_000_000} megaohms"
            ohms >= 1_000 -> "${ohms / 1_000} kiloohms"
            else -> "$ohms ohms"
        }
    }
}
