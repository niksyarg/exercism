#[derive(Debug, PartialEq, Eq)]
pub enum Error {
    NotEnoughPinsLeft,
    GameComplete,
}

pub struct BowlingGame {
    rolls: Vec<u16>,
    current_frame_rolls: Vec<u16>,
    frame_count: usize,
}

impl BowlingGame {
    pub fn new() -> Self {
        Self {
            rolls: Vec::new(),
            current_frame_rolls: Vec::new(),
            frame_count: 0,
        }
    }

    pub fn roll(&mut self, pins: u16) -> Result<(), Error> {
        if pins > 10 {
            return Err(Error::NotEnoughPinsLeft);
        }
        if self.frame_count >= 10 {
            return Err(Error::GameComplete);
        }

        // Логика обычных фреймов (с 1 по 9)
        if self.frame_count < 9 {
            if self.current_frame_rolls.is_empty() {
                if pins == 10 {
                    // Страйк
                    self.rolls.push(pins);
                    self.frame_count += 1;
                } else {
                    self.current_frame_rolls.push(pins);
                }
            } else {
                if self.current_frame_rolls[0] + pins > 10 {
                    return Err(Error::NotEnoughPinsLeft);
                }
                self.rolls.push(self.current_frame_rolls[0]);
                self.rolls.push(pins);
                self.current_frame_rolls.clear();
                self.frame_count += 1;
            }
        } else {
            // Логика финального 10-го фрейма
            let len = self.current_frame_rolls.len();
            if len == 0 {
                self.current_frame_rolls.push(pins);
            } else if len == 1 {
                let first = self.current_frame_rolls[0];
                if first < 10 && first + pins > 10 {
                    return Err(Error::NotEnoughPinsLeft);
                }
                self.current_frame_rolls.push(pins);
                
                // Если не было ни страйка, ни спэра, игра завершена после 2 бросков
                if first + pins < 10 {
                    self.rolls.extend(&self.current_frame_rolls);
                    self.current_frame_rolls.clear();
                    self.frame_count += 1;
                }
            } else if len == 2 {
                let first = self.current_frame_rolls[0];
                let second = self.current_frame_rolls[1];
                
                if first == 10 && second < 10 && second + pins > 10 {
                    return Err(Error::NotEnoughPinsLeft);
                }
                
                self.current_frame_rolls.push(pins);
                self.rolls.extend(&self.current_frame_rolls);
                self.current_frame_rolls.clear();
                self.frame_count += 1;
            }
        }

        Ok(())
    }

    pub fn score(&self) -> Option<u16> {
        if self.frame_count < 10 {
            return None;
        }

        let mut total_score = 0;
        let mut roll_idx = 0;

        for _ in 0..10 {
            if self.rolls[roll_idx] == 10 {
                // Страйк: 10 + два следующих броска
                total_score += 10 + self.rolls[roll_idx + 1] + self.rolls[roll_idx + 2];
                roll_idx += 1;
            } else if self.rolls[roll_idx] + self.rolls[roll_idx + 1] == 10 {
                // Спэр: 10 + один следующий бросок
                total_score += 10 + self.rolls[roll_idx + 2];
                roll_idx += 2;
            } else {
                // Открытый фрейм
                total_score += self.rolls[roll_idx] + self.rolls[roll_idx + 1];
                roll_idx += 2;
            }
        }

        Some(total_score)
    }
}
