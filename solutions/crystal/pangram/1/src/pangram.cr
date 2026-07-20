class Pangram
  def self.pangram?(input : String) : Bool

    input.downcase.each_char.select { |char| 'a' <= char <= 'z' }.to_set.size == 26
  end
end

