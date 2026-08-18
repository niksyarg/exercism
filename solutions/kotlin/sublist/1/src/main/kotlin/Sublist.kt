enum class Relationship {
    EQUAL, SUBLIST, SUPERLIST, UNEQUAL
}

fun <T> List<T>.relationshipTo(other: List<T>): Relationship {
    return when {
        this == other -> Relationship.EQUAL
        this.isSublistOf(other) -> Relationship.SUBLIST
        other.isSublistOf(this) -> Relationship.SUPERLIST
        else -> Relationship.UNEQUAL
    }
}

private fun <T> List<T>.isSublistOf(other: List<T>): Boolean {
    if (this.isEmpty()) return true
    if (this.size > other.size) return false

    return (0..other.size - this.size).any { index ->
        other.subList(index, index + this.size) == this
    }
}