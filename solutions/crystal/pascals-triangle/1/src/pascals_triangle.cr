class PascalsTriangle
  def self.rows(count : Int32) : Array(Array(Int32))
    return [] of Array(Int32) if count <= 0

    triangle = [[1]]

    (1...count).each do |i|
      prev_row = triangle.last
   
      new_row = [1]
      
      (0...prev_row.size - 1).each do |j|
        new_row << prev_row[j] + prev_row[j + 1]
      end
      
      new_row << 1
      triangle << new_row
    end

    triangle
  end
end
