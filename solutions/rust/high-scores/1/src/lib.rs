#[derive(Debug)]
pub struct HighScores {
    scores: Vec<u32>,
}

impl HighScores {
    // 1. Создает новый экземпляр HighScores на основе переданного среза
    pub fn new(scores: &[u32]) -> Self {
        HighScores {
            scores: scores.to_vec(),
        }
    }

    // 2. Возвращает срез всех результатов
    pub fn scores(&self) -> &[u32] {
        &self.scores
    }

    // 3. Возвращает последний добавленный результат (последний элемент вектора)
    pub fn latest(&self) -> Option<u32> {
        self.scores.last().copied()
    }

    // 4. Возвращает самый высокий результат (максимальное значение)
    pub fn personal_best(&self) -> Option<u32> {
        self.scores.iter().max().copied()
    }

    // 5. Возвращает три самых высоких результата, отсортированных по убыванию
    pub fn personal_top_three(&self) -> Vec<u32> {
        let mut sorted_scores = self.scores.clone();
        // Сортируем по убыванию
        sorted_scores.sort_unstable_by(|a, b| b.cmp(a));
        // Берем максимум 3 элемента
        sorted_scores.truncate(3);
        sorted_scores
    }
}
