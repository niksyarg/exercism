const DEFAULT_STUDENTS = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Fred',
  'Ginny',
  'Harriet',
  'Ileana',
  'Joseph',
  'Kincaid',
  'Larry',
];

const PLANT_CODES = {
  G: 'grass',
  V: 'violets',
  R: 'radishes',
  C: 'clover',
};

export class Garden {
  constructor(diagram, students = DEFAULT_STUDENTS) {
    // Разделяем грядку на два ряда и сортируем имена детей по алфавиту
    this.rows = diagram.split('\n');
    this.students = [...students].sort();
  }

  plants(student) {
    // Находим номер (индекс) ребёнка в алфавитном списке
    const studentIndex = this.students.indexOf(student);
    
    // Каждый ребёнок берёт по 2 чашки с каждого ряда
    // Вычисляем начальную позицию букв в строке
    const startIndex = studentIndex * 2;

    // Собираем буквы растений для этого ребёнка
    const studentPlantCodes = [
      this.rows[0][startIndex],
      this.rows[0][startIndex + 1],
      this.rows[1][startIndex],
      this.rows[1][startIndex + 1],
    ];

    // Превращаем буквы в полные названия растений
    return studentPlantCodes.map(code => PLANT_CODES[code]);
  }
}
