#[derive(Debug, PartialEq, Eq, Clone, Copy)]
pub enum Allergen {
    Eggs = 1,
    Peanuts = 2,
    Shellfish = 4,
    Strawberries = 8,
    Tomatoes = 16,
    Chocolate = 32,
    Pollen = 64,
    Cats = 128,
}

pub struct Allergies {
    score: u32,
}

impl Allergies {
    // Конструктор: сохраняем числовое значение аллергического балла
    pub fn new(score: u32) -> Self {
        Allergies { score }
    }

    // Проверяем, есть ли аллергия на конкретный предмет
    pub fn is_allergic_to(&self, allergen: &Allergen) -> bool {
        let allergen_value = *allergen as u32;
        // Если побитовое И возвращает значение аллергена, значит бит установлен
        (self.score & allergen_value) == allergen_value
    }

    // Возвращаем полный список аллергенов пациента
    pub fn allergies(&self) -> Vec<Allergen> {
        // Перебираем все возможные варианты из enum Allergen
        let all_allergens = [
            Allergen::Eggs,
            Allergen::Peanuts,
            Allergen::Shellfish,
            Allergen::Strawberries,
            Allergen::Tomatoes,
            Allergen::Chocolate,
            Allergen::Pollen,
            Allergen::Cats,
        ];

        all_allergens
            .iter()
            .filter(|&allergen| self.is_allergic_to(allergen))
            .cloned()
            .collect()
    }
}
