export class GradeSchool {
  private schoolRoster: { [grade: number]: string[] } = {};
  roster() {
    const sortedRoster: { [grade: number]: string[] } = {};
    const grades = Object.keys(this.schoolRoster).map(Number).sort((a, b) => a - b);
    for (const grade of grades) {
      sortedRoster[grade] = [...this.schoolRoster[grade]].sort();
    }
    return JSON.parse(JSON.stringify(sortedRoster));
  }

  add(name: string, grade: number) {
    for (const g in this.schoolRoster) {
      this.schoolRoster[g] = this.schoolRoster[g].filter(student => student !== name);
    }
    if (!this.schoolRoster[grade]) {
      this.schoolRoster[grade] = [];
    }
    this.schoolRoster[grade].push(name);
  }

  grade(grade: number) {
    return this.schoolRoster[grade] ? [...this.schoolRoster[grade]].sort() : [];
  }
}

