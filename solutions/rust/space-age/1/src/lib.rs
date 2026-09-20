// Добавляем структуру Duration, которая хранит количество секунд
#[derive(Debug)]
pub struct Duration {
    seconds: u64,
}

// Реализуем создание Duration из секунд
impl From<u64> for Duration {
    fn from(s: u64) -> Self {
        Duration { seconds: s }
    }
}

// Определяем трейт Planet с методом подсчета лет
pub trait Planet {
    // Константа для орбитального периода планеты относительно Земли
    const ORBITAL_PERIOD: f64;

    fn years_during(d: &Duration) -> f64 {
        let earth_year_seconds = 31_557_600.0;
        let planet_year_seconds = earth_year_seconds * Self::ORBITAL_PERIOD;
        d.seconds as f64 / planet_year_seconds
    }
}

// Макрос для быстрой и удобной реализации трейта для всех планет
macro_rules! impl_planet {
    ($planet:ident, $period:expr) => {
        pub struct $planet;
        impl Planet for $planet {
            const ORBITAL_PERIOD: f64 = $period;
        }
    };
}

// Реализуем структуры и трейты для каждой планеты с их периодами
impl_planet!(Mercury, 0.2408467);
impl_planet!(Venus, 0.61519726);
impl_planet!(Earth, 1.0);
impl_planet!(Mars, 1.8808158);
impl_planet!(Jupiter, 11.862615);
impl_planet!(Saturn, 29.447498);
impl_planet!(Uranus, 84.016846);
impl_planet!(Neptune, 164.79132);
