module NthPrime
  def self.prime(number : Number) : Number
    raise ArgumentError.new("Number must be greater than 0") if number <= 0

    count = 0
    candidate = 1

    while count < number
      candidate += 1
      if is_prime?(candidate)
        count += 1
      end
    end

    candidate
  end

  private def self.is_prime?(n : Number) : Bool
    return false if n <= 1
    return true if n <= 3
    return false if n % 2 == 0 || n % 3 == 0

    i = 5
    while i * i <= n
      if n % i == 0 || n % (i + 2) == 0
        return false
      end
      i += 6
    end

    true
  end
end
