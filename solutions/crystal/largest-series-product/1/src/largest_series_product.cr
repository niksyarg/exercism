class LargestSeriesProduct
  def initialize(@digits : String)
  
    if @digits.chars.any? { |char| !char.ascii_number? }
      raise ArgumentError.new("String to search must only contain digits.")
    end
  end

  def largest_product(span : Int32) : Int64
    
    raise ArgumentError.new("Span cannot be negative.") if span < 0
    raise ArgumentError.new("Span cannot be greater than string length.") if span > @digits.size

    
    return 1_i64 if span == 0

    max_product = 0_i64

    
    (0..@digits.size - span).each do |i|
      current_span = @digits[i, span]
   
      current_product = current_span.chars.reduce(1_i64) do |product, char|
        product * char.to_i64
      end


      max_product = current_product if current_product > max_product
    end

    max_product
  end
end
