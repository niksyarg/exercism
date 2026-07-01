export class Anagram {
  private target: string;
  private normalizedTarget: string;

  constructor(input: string) {
    this.target = input.toLowerCase();
    this.normalizedTarget = this.sortCharacters(this.target);
  }

  public matches(...potentials: string[]): string[] {
    return potentials.filter((word) => {
      const lowerWord = word.toLowerCase();
      
      if (lowerWord === this.target) {
        return false;
      }

      return this.sortCharacters(lowerWord) === this.normalizedTarget;
    });
  }

  private sortCharacters(str: string): string {
    return [...str].sort().join('');
  }
}
