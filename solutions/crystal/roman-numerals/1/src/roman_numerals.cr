struct Int
  def to_roman : String
 
    mapping = {
      1000 => "M",
      900  => "CM",
      500  => "D",
      400  => "CD",
      100  => "C",
      90   => "XC",
      50   => "L",
      40   => "XL",
      10   => "X",
      9    => "IX",
      5    => "V",
      4    => "IV",
      1    => "I"
    }

    result = ""
    remaining = self

    
    mapping.each do |value, letter|
      while remaining >= value
        result += letter
        remaining -= value
      end
    end

    result
  end
end
