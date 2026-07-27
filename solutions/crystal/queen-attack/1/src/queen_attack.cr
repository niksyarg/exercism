class Queen
  property row : Int32
  property column : Int32

  def initialize(row : Int32, column : Int32)
    raise ArgumentError.new("Row must be positive") if row < 0
    raise ArgumentError.new("Row not on board") if row > 7
    raise ArgumentError.new("Column must be positive") if column < 0
    raise ArgumentError.new("Column not on board") if column > 7

    @row = row
    @column = column
  end

  def can_attack?(other : Queen) : Bool

    return true if @row == other.row
    

    return true if @column == other.column
    
    
    return true if (@row - other.row).abs == (@column - other.column).abs

    false
  end
end
