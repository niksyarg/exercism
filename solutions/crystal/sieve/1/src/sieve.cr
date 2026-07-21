module Primes
  def self.sieve(limit : Int32) : Array(Int32)
    return [] of Int32 if limit < 2

    is_prime = Array(Bool).new(limit + 1, true)
    is_prime[0] = false
    is_prime[1] = false

    (2..Math.sqrt(limit).to_i).each do |i|
      if is_prime[i]
        current = i * i
        while current <= limit
          is_prime[current] = false
          current += i
        end
      end
    end

    primes = [] of Int32
    (2..limit).each do |i|
      primes << i if is_prime[i]
    end

    primes
  end
end
