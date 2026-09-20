class CustomSet(vararg elements: Int) {

    // Внутреннее хранилище для уникальных элементов
    private val storage = mutableListOf<Int>()

    init {
        // Добавляем только уникальные элементы при создании объекта
        for (element in elements) {
            if (!storage.contains(element)) {
                storage.add(element)
            }
        }
    }

    // Проверяет, пустое ли множество
    fun isEmpty(): Boolean {
        return storage.isEmpty()
    }

    // Проверяет, является ли текущее множество подмножеством другого множества
    fun isSubset(other: CustomSet): Boolean {
        for (element in storage) {
            if (!other.contains(element)) {
                return false
            }
        }
        return true
    }

    // Проверяет, что у множеств нет общих элементов (они не пересекаются)
    fun isDisjoint(other: CustomSet): Boolean {
        for (element in storage) {
            if (other.contains(element)) {
                return false
            }
        }
        return true
    }

    // Проверяет, содержит ли множество конкретное число
    fun contains(other: Int): Boolean {
        return storage.contains(other)
    }

    // Возвращает новое множество, содержащее только общие элементы
    fun intersection(other: CustomSet): CustomSet {
        val commonElements = storage.filter { other.contains(it) }.toIntArray()
        return CustomSet(*commonElements)
    }

    // Добавляет элемент в множество, если его там еще нет
    fun add(other: Int) {
        if (!storage.contains(other)) {
            storage.add(other)
        }
    }

    // Сравнивает два множества на равенство (независимо от порядка элементов)
    override fun equals(other: Any?): Boolean {
        if (other !is CustomSet) return false
        if (this.storage.size != other.storage.size) return false
        return this.isSubset(other)
    }

    // Хэш-код для корректной работы сравнения
    override fun hashCode(): Int {
        return storage.sorted().hashCode()
    }

    // Оператор плюс: объединяет два множества в одно новое
    operator fun plus(other: CustomSet): CustomSet {
        val result = CustomSet(*this.storage.toIntArray())
        for (element in other.storage) {
            result.add(element)
        }
        return result
    }

    // Оператор минус: удаляет из первого множества все элементы, которые есть во втором
    operator fun minus(other: CustomSet): CustomSet {
        val remainingElements = storage.filter { !other.contains(it) }.toIntArray()
        return CustomSet(*remainingElements)
    }
}
