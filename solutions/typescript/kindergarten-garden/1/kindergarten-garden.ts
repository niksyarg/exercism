const DEFAULT_STUDENTS: Student[] = [
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
]

const PLANT_CODES = {
  G: 'grass',
  V: 'violets',
  R: 'radishes',
  C: 'clover',
} as const

type Student = string
type Plant = (typeof PLANT_CODES)[keyof typeof PLANT_CODES]
type Plants = Plant[]

export class Garden {
  private row1: string;
  private row2: string;
  private students: Student[];

  constructor(diagram: string, students = DEFAULT_STUDENTS) {
    // Разделяем строку на два ряда растений
    const [row1, row2] = diagram.split('\n');
    this.row1 = row1;
    this.row2 = row2;
    
    // Сортируем список студентов по алфавиту, так как грядки выдаются строго по порядку
    this.students = [...students].sort();
  }

  public plants(student: Student): Plants {
    // Находим порядковый номер ребёнка в отсортированном списке
    const studentIndex = this.students.indexOf(student);
    
    // Если студент не найден, возвращаем пустой массив
    if (studentIndex === -1) {
      return [];
    }

    // Вычисляем начальный индекс символов в строке ряда для этого ребёнка
    const startIdx = studentIndex * 2;

    // Берем по 2 знака из каждого ряда
    const codes = [
      this.row1[startIdx],
      this.row1[startIdx + 1],
      this.row2[startIdx],
      this.row2[startIdx + 1],
    ] as const;

    // Переводим буквы-коды в полное название растений
    return codes.map(code => PLANT_CODES[code as keyof typeof PLANT_CODES]);
  }
}
