module Luhn
  def self.valid?(input : String) : Bool

    cleaned = input.gsub(" ", "")


    return false if cleaned.size <= 1

   
return false unless cleaned.chars.all?(&.ascii_number?)


    sum = 0
   
    cleaned.reverse.each_char.with_index do |char, index|
      digit = char.to_i

   
      if index.odd?
        digit *= 2
        digit -= 9 if digit > 9
      end

      sum += digit
    end

  sum % 10 == 0
  end
end
