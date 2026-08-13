class SpaceAge(val seconds: Long) {
    constructor(seconds: Int) : this(seconds.toLong())
    constructor(seconds: Double) : this(seconds.toLong())

    private val earthSeconds: Double = 31557600.0

    private fun ageOn(orbitalPeriod: Double): Double {
        return (seconds.toDouble() / earthSeconds) / orbitalPeriod
    }

    fun onEarth(): Double = ageOn(1.0)
    fun onMercury(): Double = ageOn(0.2408467)
    fun onVenus(): Double = ageOn(0.61519726)
    fun onMars(): Double = ageOn(1.8808158)
    fun onJupiter(): Double = ageOn(11.862615)
    fun onSaturn(): Double = ageOn(29.447498)
    fun onUranus(): Double = ageOn(84.016846)
    fun onNeptune(): Double = ageOn(164.79132)
}
