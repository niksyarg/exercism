module ResistorColorTrio
  COLOR_VALUES = {
    "black"  => 0,
    "brown"  => 1,
    "red"    => 2,
    "orange" => 3,
    "yellow" => 4,
    "green"  => 5,
    "blue"   => 6,
    "violet" => 7,
    "grey"   => 8,
    "white"  => 9,
  }

  def self.label(values : Array(String)) : String
 
    c1 = COLOR_VALUES[values[0]]
    c2 = COLOR_VALUES[values[1]]
    c3 = COLOR_VALUES[values[2]]


    ohms = ((c1 * 10) + c2).to_i64 * (10_i64 ** c3)

    if ohms >= 1_000_000_000 && ohms % 1_000_000_000 == 0
      "#{ohms // 1_000_000_000} gigaohms"
    elsif ohms >= 1_000_000 && ohms % 1_000_000 == 0
      "#{ohms // 1_000_000} megaohms"
    elsif ohms >= 1_000 && ohms % 1_000 == 0
      "#{ohms // 1_000} kiloohms"
    else
      "#{ohms} ohms"
    end
  end
end
