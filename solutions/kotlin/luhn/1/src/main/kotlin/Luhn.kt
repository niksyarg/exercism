object Luhn {

    fun isValid(candidate: String): Boolean {
        // 1. Убираем все пробелы
        val cleanCandidate = candidate.replace(" ", "")

        // 2. Длина должна быть строго больше 1 символа
        if (cleanCandidate.length <= 1) {
            return false
        }

        var sum = 0
        // Флаг: нужно ли удваивать текущую цифру. 
        // Идем справа налево, поэтому вторую цифру справа (индекс с конца) удваиваем.
        var doubleCurrent = false

        // 3. Перебираем строку с конца в начало
        for (i in cleanCandidate.length - 1 downTo 0) {
            val char = cleanCandidate[i]

            // Если встретили не цифру — номер неверный
            if (!char.isDigit()) {
                return false
            }

            var digit = char.digitToInt()

            // Удваиваем каждую вторую цифру, считая справа
            if (doubleCurrent) {
                digit *= 2
                if (digit > 9) {
                    digit -= 9
                }
            }

            sum += digit
            // Меняем флаг для следующей цифры
            doubleCurrent = !doubleCurrent
        }

        // 4. Номер верен, если сумма делится на 10 без остатка
        return sum % 10 == 0
    }
}
