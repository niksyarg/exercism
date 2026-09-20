data class Item(val weight: Int, val value: Int)

fun knapsack(maximumWeight: Int, items: List<Item>): Int {

    val dp = IntArray(maximumWeight + 1)


    for (item in items) {
      
        for (w in maximumWeight downTo item.weight) {
            
            dp[w] = maxOf(dp[w], dp[w - item.weight] + item.value)
        }
    }

    
    return dp[maximumWeight]
}
