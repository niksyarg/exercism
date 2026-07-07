module ArmstrongNumbers
  def self.armstrong_number?(input : Number) : Bool
    digits = input.to_s.chars.map(&.to_i)
    power = digits.size
    
    sum = digits.reduce(0) { |acc, digit| acc + digit ** power }
    
    sum == input
  end
end
