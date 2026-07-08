export class Clock {
  constructor(hours = 0, minutes = 0) {
    this.totalMinutes = this.normalize(hours * 60 + minutes);
  }

  normalize(minutes) {
    const minutesInDay = 24 * 60;
    return ((minutes % minutesInDay) + minutesInDay) % minutesInDay;
  }

  toString() {
    const hours = Math.floor(this.totalMinutes / 60);
    const minutes = this.totalMinutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  }

  plus(minutesToAdd) {
    return new Clock(0, this.totalMinutes + minutesToAdd);
  }

  minus(minutesToSubtract) {
    return new Clock(0, this.totalMinutes - minutesToSubtract);
  }

  equals(otherClock) {
    return this.totalMinutes === otherClock.totalMinutes;
  }
}
