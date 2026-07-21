module LineUp
  def self.format(name : String, number : Int32) : String

    last_two_digits = number % 100
 
    last_digit = number % 10

    suffix = if last_two_digits == 11 || last_two_digits == 12 || last_two_digits == 13
               "th"
             elsif last_digit == 1
               "st"
             elsif last_digit == 2
               "nd"
             elsif last_digit == 3
               "rd"
             else
               "th"
             end

   
    "#{name}, you are the #{number}#{suffix} customer we serve today. Thank you!"
  end
end
