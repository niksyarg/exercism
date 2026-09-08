class ChangeCalculator(private val coins: List<Int>) {

    fun computeMostEfficientChange(grandTotal: Int): List<Int> {
        require(grandTotal >= 0) { "Сумма не может быть отрицательной" }
        if (grandTotal == 0) return emptyList()

        // Таблица dp[i] будет хранить минимальное количество монет для суммы i
        val dp = IntArray(grandTotal + 1) { grandTotal + 1 }
        // Таблица parent[i] поможет нам восстановить сами монеты
        val parent = IntArray(grandTotal + 1) { -1 }

        dp[0] = 0

        // Заполняем таблицу для всех сумм от 1 до grandTotal
        for (i in 1..grandTotal) {
            for (coin in coins) {
                if (coin <= i && dp[i - coin] + 1 < dp[i]) {
                    dp[i] = dp[i - coin] + 1
                    parent[i] = coin
                }
            }
        }

        // Если сумму невозможно собрать имеющимися монетами
        if (dp[grandTotal] > grandTotal) {
            throw IllegalArgumentException("Невозможно выдать сдачу данными монетами")
        }

        // Восстанавливаем список монет по сохранённым предкам
        val result = mutableListOf<Int>()
        var current = grandTotal
        while (current > 0) {
            val coin = parent[current]
            result.add(coin)
            current -= coin
        }

        // Сортируем по возрастанию, как в примерах задания
        return result.sorted()
    }
}
