class DndCharacter
  # Список всех характеристик персонажа
  ABILITIES = %i[strength dexterity constitution intelligence wisdom charisma].freeze

  # Создаем автоматически методы для чтения всех характеристик и здоровья
  attr_reader *ABILITIES, :hitpoints

  # Статический метод для расчета модификатора характеристики
  def self.modifier(score)
    # В Ruby целочисленное деление автоматически округляется в меньшую сторону (floor)
    (score - 10) / 2
  end

  def initialize
    @strength = self.class.generate_ability_score
    @dexterity = self.class.generate_ability_score
    @constitution = self.class.generate_ability_score
    @intelligence = self.class.generate_ability_score
    @wisdom = self.class.generate_ability_score
    @charisma = self.class.generate_ability_score
    
    # Базовое здоровье: 10 + модификатор выносливости (constitution)
    @hitpoints = 10 + self.class.modifier(@constitution)
  end

  private

  # Вспомогательный метод для генерации значения одной характеристики
  def self.generate_ability_score
    # Бросаем 4 шестигранных кубика, сортируем, берем 3 наибольших и суммируем
    Array.new(4) { rand(1..6) }.sort.last(3).sum
  end
end
