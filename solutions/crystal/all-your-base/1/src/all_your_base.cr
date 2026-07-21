module AllYourBase
  def self.rebase(input_base : Int32, digits : Array(Int32), output_base : Int32) : Array(Int32)
  
    raise ArgumentError.new("Input base must be 2 or greater") if input_base < 2
    raise ArgumentError.new("Output base must be 2 or greater") if output_base < 2


    digits.each do |digit|
      if digit < 0 || digit >= input_base
        raise ArgumentError.new("All digits must be >= 0 and < input_base")
      end
    end


    decimal_value = 0
    digits.each do |digit|
      decimal_value = decimal_value * input_base + digit
    end


    return [0] if decimal_value == 0


    output_digits = [] of Int32
    while decimal_value > 0
      output_digits << decimal_value % output_base
      decimal_value = decimal_value // output_base 
    end


    output_digits.reverse
  end
end
