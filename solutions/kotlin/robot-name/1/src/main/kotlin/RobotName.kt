class Robot {
    private var _name: String? = null

    val name: String
        get() {
            if (_name == null) {
                _name = generateUniqueName()
            }
            return _name!!
        }

    fun reset() {
        _name = null
    }

    companion object {
        private val assignedNames = mutableSetOf<String>()

        private fun generateUniqueName(): String {
            while (true) {
                val letters = (('A'..'Z').random().toString() + ('A'..'Z').random())
                val digits = String.format("%03d", (0..999).random())
                val candidate = letters + digits
                if (assignedNames.add(candidate)) {
                    return candidate
                }
            }
        }
    }
}
