module SaddlePoints
  def self.saddle_points(matrix : Array(Array(Int32))) : Set(NamedTuple(row: Int32, column: Int32))
    result = Set(NamedTuple(row: Int32, column: Int32)).new
    
    return result if matrix.empty? || matrix.first.empty?

    num_rows = matrix.size
    num_cols = matrix.first.size

  
    row_maxima = matrix.map(&.max)

  
    col_minima = Array(Int32).new(num_cols) do |col_idx|
      num_rows.times.map { |row_idx| matrix[row_idx][col_idx] }.min
    end


    matrix.each_with_index do |row, row_idx|
      row.each_with_index do |val, col_idx|
        if val == row_maxima[row_idx] && val == col_minima[col_idx]
        
          result << {row: row_idx + 1, column: col_idx + 1}
        end
      end
    end

    result
  end
end
