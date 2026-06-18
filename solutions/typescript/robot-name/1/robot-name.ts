export class Robot {
  private static usedNames = new Set<string>();
  private _name: string | null = null;

  constructor() {
    this.generateName();
  }

  public get name(): string {
    if (!this._name) {
      this.generateName();
    }
    return this._name!;
  }

  public resetName(): void {
    this._name = null;
  }

  public static releaseNames(): void {
    Robot.usedNames.clear();
  }

  private generateName(): void {
    let newName: string;
   
    do {
      const letters = String.fromCharCode(
        this.getRandomInt(65, 90),
        this.getRandomInt(65, 90)
      );
      const digits = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
      newName = `${letters}${digits}`;
    } while (Robot.usedNames.has(newName));

    Robot.usedNames.add(newName);
    this._name = newName;
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
