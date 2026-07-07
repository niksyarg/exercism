module CollatzConjecture
  def self.steps(input : Number) : Number
    raise ArgumentError.new("Only positive integers are allowed") if input <= 0
    
    steps = 0
    current = input

    while current != 1
      if current.even?
      current //= 2

      else
        current = 3 * current + 1
      end
      steps += 1
    end

    steps
  end
end
