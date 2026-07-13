class Triangle<out T : Number>(val a: T, val b: T, val c: T) {

    init {
        val sideA = a.toDouble()
        val sideB = b.toDouble()
        val sideC = c.toDouble()

   
        require(sideA > 0 && sideB > 0 && sideC > 0) { "Sides must be greater than zero" }
        require(sideA + sideB >= sideC && sideA + sideC >= sideB && sideB + sideC >= sideA) {
            "Triangle inequality violated"
        }
    }


    val isEquilateral: Boolean = a == b && b == c

  
    val isIsosceles: Boolean = a == b || b == c || a == c


    val isScalene: Boolean = a != b && b != c && a != c
}
