module PerfectNumbers
  def self.classify(num : Number) : String
    raise ArgumentError.new("Number must be positive") if num < 1


    return "deficient" if num == 1


    sum = 1
    sqrt = Math.isqrt(num)

    (2..sqrt).each do |i|
      if num % i == 0
        sum += i
        other_divisor = num // i
        
        sum += other_divisor if other_divisor != i
      end
    end

    if sum == num
      "perfect"
    elsif sum > num
      "abundant"
    else
      "deficient"
    end
  end
end
