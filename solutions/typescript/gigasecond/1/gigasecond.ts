export class Gigasecond {
  private readonly GIGASECOND_IN_MS = 1e12; 
  constructor(private readonly startDate: Date) {}

  public date(): Date {
    return new Date(this.startDate.getTime() + this.GIGASECOND_IN_MS);
  }
}
