class Raindrops
  def self.convert(num : Int32) : String
    result = String.build do |str|
      str << "Pling" if num % 3 == 0
      str << "Plang" if num % 5 == 0
      str << "Plong" if num % 7 == 0
    end

    result.empty? ? num.to_s : result
  end
end
