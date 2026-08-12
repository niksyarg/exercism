import kotlin.math.floor
import kotlin.random.Random

class DndCharacter {

    val strength: Int = ability()
    val dexterity: Int = ability()
    val constitution: Int = ability()
    val intelligence: Int = ability()
    val wisdom: Int = ability()
    val charisma: Int = ability()
    val hitpoints: Int = 10 + modifier(constitution)

    companion object {

        fun ability(): Int {
          
            val rolls = List(4) { Random.nextInt(1, 7) }
        
            return rolls.sum() - rolls.minOrNull()!!
        }

        fun modifier(score: Int): Int {
           
            return floor((score - 10) / 2.0).toInt()
        }
    }
}
