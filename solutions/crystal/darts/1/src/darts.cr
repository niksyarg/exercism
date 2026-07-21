module Darts
  def self.score(x : Number, y : Number) : Number
 
    distance_squared = x*x + y*y

    if distance_squared <= 1
      10
    elsif distance_squared <= 25
      5
    elsif distance_squared <= 100
      1
    else
      0
    end
  end
end
