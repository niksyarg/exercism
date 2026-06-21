export class Clock {
  private minutes: number;
  constructor(hour: number, minute: number = 0) {
    const totalMinutes = (hour * 60 + minute) % 1440;
    this.minutes = (totalMinutes + 1440) % 1440;
  }

  public toString(): string {
    const h = Math.floor(this.minutes / 60).toString().padStart(2, '0');
    const m = (this.minutes % 60).toString().padStart(2, '0');
    return `${h}:${m}`;
  }

  public plus(minutes: number): Clock {
    return new Clock(0, this.minutes + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(0, this.minutes - minutes);
  }

  public equals(other: Clock): boolean {
    return this.minutes === other.minutes;
  }
}
