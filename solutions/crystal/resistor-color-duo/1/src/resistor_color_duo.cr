module ResistorColorDuo

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

  def self.value(values : Array(String)) : Number
    COLOR_VALUES[values[0]] * 10 + COLOR_VALUES[values[1]]
  end
end
