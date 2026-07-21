module Grains
  def self.square(number : Number) : Number

    unless (1..64).includes?(number)
      raise ArgumentError.new("Square must be between 1 and 64")
    end

  
    1_u64 << (number - 1)
  end

  def self.total : Number

    UInt64::MAX
  end
end
