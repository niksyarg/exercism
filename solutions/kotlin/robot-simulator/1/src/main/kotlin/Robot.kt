class Robot(
    initialGridPosition: GridPosition = GridPosition(0, 0),
    initialOrientation: Orientation = Orientation.NORTH
) {
    var gridPosition: GridPosition = initialGridPosition
        private set

    var orientation: Orientation = initialOrientation
        private set

    fun simulate(instructions: String) {
        for (char in instructions) {
            when (char) {
                'R' -> turnRight()
                'L' -> turnLeft()
                'A' -> advance()
                else -> throw IllegalArgumentException("Unknown instruction: $char")
            }
        }
    }

    private fun turnRight() {
        orientation = when (orientation) {
            Orientation.NORTH -> Orientation.EAST
            Orientation.EAST -> Orientation.SOUTH
            Orientation.SOUTH -> Orientation.WEST
            Orientation.WEST -> Orientation.NORTH
        }
    }

    private fun turnLeft() {
        orientation = when (orientation) {
            Orientation.NORTH -> Orientation.WEST
            Orientation.WEST -> Orientation.SOUTH
            Orientation.SOUTH -> Orientation.EAST
            Orientation.EAST -> Orientation.NORTH
        }
    }

    private fun advance() {
        val currentX = gridPosition.x
        val currentY = gridPosition.y
        
        gridPosition = when (orientation) {
            Orientation.NORTH -> GridPosition(currentX, currentY + 1)
            Orientation.EAST  -> GridPosition(currentX + 1, currentY)
            Orientation.SOUTH -> GridPosition(currentX, currentY - 1)
            Orientation.WEST  -> GridPosition(currentX - 1, currentY)
        }
    }
}
