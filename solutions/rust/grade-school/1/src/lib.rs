use std::collections::BTreeMap;

pub struct School {
    // Используем BTreeMap, чтобы классы автоматически сортировались по порядку (1, 2, 3...)
    roster: BTreeMap<u32, Vec<String>>,
}

impl School {
    pub fn new() -> School {
        School {
            roster: BTreeMap::new(),
        }
    }

    pub fn add(&mut self, grade: u32, student: &str) {
        // Проверяем, нет ли уже этого студента вообще во всей школе
        for students in self.roster.values() {
            if students.contains(&student.to_string()) {
                // По условию задания: если студент уже есть в реестре, добавление игнорируется
                return;
            }
        }

        // Получаем вектор учеников для класса или создаем новый
        let students = self.roster.entry(grade).or_insert_with(Vec::new);
        
        // Добавляем ученика
        students.push(student.to_string());
        
        // Сразу сортируем имена по алфавиту для этого класса
        students.sort();
    }

    pub fn grades(&self) -> Vec<u32> {
        // Возвращаем отсортированный список всех существующих классов
        self.roster.keys().cloned().collect()
    }

    pub fn grade(&self, grade: u32) -> Vec<String> {
        // Возвращаем копию списка учеников для конкретного класса, либо пустой вектор
        self.roster.get(&grade).cloned().unwrap_or_default()
    }
}
