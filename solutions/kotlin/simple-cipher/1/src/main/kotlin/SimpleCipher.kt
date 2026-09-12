import kotlin.random.Random

data class Cipher(val key: String) {

    // Вторичный конструктор для генерации случайного ключа, если он не передан
    constructor() : this(generateRandomKey())

    init {
        // Проверка: ключ не должен быть пустым и должен состоять только из строчных латинских букв
        require(key.isNotEmpty() && key.all { it in 'a'..'z' }) {
            "Ключ должен содержать только строчные латинские буквы и не быть пустым."
        }
    }

    // Метод для шифрования (Encoding)
    fun encode(s: String): String {
        return s.mapIndexed { index, char ->
            val shift = key[index % key.length] - 'a'
            val newChar = 'a' + (char - 'a' + shift) % 26
            newChar
        }.joinToString("")
    }

    // Метод для дешифрования (Decoding)
    fun decode(s: String): String {
        return s.mapIndexed { index, char ->
            val shift = key[index % key.length] - 'a'
            // Добавляем 26 перед делением по модулю, чтобы избежать отрицательных значений
            val newChar = 'a' + (char - 'a' - shift + 26) % 26
            newChar
        }.joinToString("")
    }

    companion object {
        // Статический метод для генерации случайного ключа из 100 символов
        private fun generateRandomKey(): String {
            val alphabet = 'a'..'z'
            return (1..100)
                .map { alphabet.random() }
                .joinToString("")
        }
    }
}
