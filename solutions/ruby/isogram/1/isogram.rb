class Isogram
  def self.isogram?(phrase)
    letters = phrase.downcase.scan(/[a-zа-яё]/)
    letters.uniq.length == letters.length
  end
end
