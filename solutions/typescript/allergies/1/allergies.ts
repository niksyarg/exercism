const ALLERGEN_VALUES: Record<string, number> = {
  eggs: 1,
  peanuts: 2,
  shellfish: 4,
  strawberries: 8,
  tomatoes: 16,
  chocolate: 32,
  pollen: 64,
  cats: 128,
};

export class Allergies {
  private score: number;

  constructor(allergenIndex: number) {
    this.score = allergenIndex & 255;
  }

  public list(): string[] {
    return Object.keys(ALLERGEN_VALUES).filter((allergen) =>
      this.allergicTo(allergen)
    );
  }

  public allergicTo(allergen: string): boolean {
    const value = ALLERGEN_VALUES[allergen];
    return (this.score & value) === value;
  }
}
