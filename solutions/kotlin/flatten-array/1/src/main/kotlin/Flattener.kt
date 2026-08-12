object Flattener {
    fun flatten(source: Collection<Any?>): List<Any> {
        val result = mutableListOf<Any>()

        for (item in source) {
            when (item) {
                null -> continue
                is Collection<*> -> result.addAll(flatten(item))
                else -> result.add(item)
            }
        }

        return result
    }
}