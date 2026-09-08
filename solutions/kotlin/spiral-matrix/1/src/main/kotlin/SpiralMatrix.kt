object SpiralMatrix {
    fun ofSize(size: Int): Array<IntArray> {
        // Создаём пустую квадратную матрицу нужного размера
        val matrix = Array(size) { IntArray(size) }
        
        var value = 1        // Число, которое мы сейчас записываем
        var top = 0          // Верхняя граница
        var bottom = size - 1 // Нижняя граница
        var left = 0         // Левая граница
        var right = size - 1// Правая граница

        while (value <= size * size) {
            // 1. Движемся слева направо по верхней строке
            for (i in left..right) {
                matrix[top][i] = value++
            }
            top++ // Сдвигаем верхнюю границу вниз

            // 2. Движемся сверху вниз по правому столбцу
            for (i in top..bottom) {
                matrix[i][right] = value++
            }
            right-- // Сдвигаем правую границу влево

            // 3. Движемся справа налево по нижней строке
            for (i in right downTo left) {
                matrix[bottom][i] = value++
            }
            bottom-- // Сдвигаем нижнюю границу вверх

            // 4. Движемся снизу вверх по левому столбцу
            for (i in bottom downTo top) {
                matrix[i][left] = value++
            }
            left++ // Сдвигаем левую границу вправо
        }

        return matrix
    }
}
