module ResistorColor

  COLORS = [
    "black", "brown", "red", "orange", "yellow",
    "green", "blue", "violet", "grey", "white"
  ]


  def self.color_code(color : String) : Int32 | Nil
    COLORS.index(color)
  end


  def self.colors : Array(String)
    COLORS
  end
end
