module WordCount
  def self.count_words(sentence : String) : Hash(String, Int32)
    counts = Hash(String, Int32).new(0)
    

    sentence.downcase.scan(/[a-z0-9]+(?:'[a-z0-9]+)?/) do |match|
      word = match[0]
      counts[word] += 1
    end
    
    counts
  end
end
