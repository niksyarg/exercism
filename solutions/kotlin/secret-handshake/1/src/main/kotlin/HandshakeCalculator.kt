object HandshakeCalculator {
    fun calculateHandshake(number: Int): List<Signal> {
        val handshake = mutableListOf<Signal>()

        if (number and 1 != 0) handshake.add(Signal.WINK)
        if (number and 2 != 0) handshake.add(Signal.DOUBLE_BLINK)
        if (number and 4 != 0) handshake.add(Signal.CLOSE_YOUR_EYES)
        if (number and 8 != 0) handshake.add(Signal.JUMP)

        if (number and 16 != 0) handshake.reverse()

        return handshake
    }
}
