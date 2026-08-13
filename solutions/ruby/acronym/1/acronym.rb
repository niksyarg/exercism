class Acronym
  def self.abbreviate(phrase)
    phrase
      .scan(/[A-Za-z']+/)
      .map { |word| word[0] }
      .join
      .upcase
  end
end
