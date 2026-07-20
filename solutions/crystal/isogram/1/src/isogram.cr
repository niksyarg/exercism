module Isogram
  def self.isogram?(phrase : String) : Bool
    letters = phrase.downcase.chars.select(&.letter?)
    

    letters.size == letters.uniq.size
  end
end
