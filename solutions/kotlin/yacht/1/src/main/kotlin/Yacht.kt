object Yacht {

    fun solve(category: YachtCategory, vararg dices: Int): Int {
        val counts = dices.groupBy { it }.mapValues { it.value.size }
        val sortedDices = dices.sorted()

        return when (category) {
            YachtCategory.ONES -> dices.filter { it == 1 }.sum()
            YachtCategory.TWOS -> dices.filter { it == 2 }.sum()
            YachtCategory.THREES -> dices.filter { it == 3 }.sum()
            YachtCategory.FOURS -> dices.filter { it == 4 }.sum()
            YachtCategory.FIVES -> dices.filter { it == 5 }.sum()
            YachtCategory.SIXES -> dices.filter { it == 6 }.sum()

            YachtCategory.FULL_HOUSE -> {
                if (counts.values.toSet() == setOf(2, 3)) {
                    dices.sum()
                } else {
                    0
                }
            }

            YachtCategory.FOUR_OF_A_KIND -> {
                val fourOfAKindDie = counts.entries.firstOrNull { it.value >= 4 }?.key
                if (fourOfAKindDie != null) {
                    fourOfAKindDie * 4
                } else {
                    0
                }
            }

            YachtCategory.LITTLE_STRAIGHT -> {
                if (sortedDices == listOf(1, 2, 3, 4, 5)) 30 else 0
            }

            YachtCategory.BIG_STRAIGHT -> {
                if (sortedDices == listOf(2, 3, 4, 5, 6)) 30 else 0
            }

            YachtCategory.CHOICE -> dices.sum()

            YachtCategory.YACHT -> {
                if (counts.size == 1) 50 else 0
            }
        }
    }
}