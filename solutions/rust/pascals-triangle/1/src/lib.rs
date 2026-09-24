pub struct PascalsTriangle {
    row_count: u32,
}

impl PascalsTriangle {
    pub fn new(row_count: u32) -> Self {
        PascalsTriangle { row_count }
    }

    pub fn rows(&self) -> Vec<Vec<u32>> {
        let mut triangle: Vec<Vec<u32>> = Vec::with_capacity(self.row_count as usize);

        for i in 0..(self.row_count as usize) {
            let mut row = Vec::with_capacity(i + 1);
            for j in 0..=i {
                if j == 0 || j == i {
                    row.push(1);
                } else {
                    let prev_row = &triangle[i - 1];
                    row.push(prev_row[j - 1] + prev_row[j]);
                }
            }
            triangle.push(row);
        }

        triangle
    }
}
