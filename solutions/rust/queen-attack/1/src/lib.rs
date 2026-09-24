#[derive(Debug)]
pub struct ChessPosition {
    rank: i32,
    file: i32,
}

#[derive(Debug)]
pub struct Queen {
    position: ChessPosition,
}

impl ChessPosition {
    pub fn new(rank: i32, file: i32) -> Option<Self> {
        // Шахматная доска 8х8 имеет индексы от 0 до 7
        if (0..8).contains(&rank) && (0..8).contains(&file) {
            Some(ChessPosition { rank, file })
        } else {
            None
        }
    }
}

impl Queen {
    pub fn new(position: ChessPosition) -> Self {
        Queen { position }
    }

    pub fn can_attack(&self, other: &Queen) -> bool {
        let r1 = self.position.rank;
        let f1 = self.position.file;
        let r2 = other.position.rank;
        let f2 = other.position.file;

        // 1. На одной горизонтали (строке)
        // 2. На одной вертикали (колонке)
        // 3. На одной диагонали (разница координат по модулю равна)
        r1 == r2 || f1 == f2 || (r1 - r2).abs() == (f1 - f2).abs()
    }
}
