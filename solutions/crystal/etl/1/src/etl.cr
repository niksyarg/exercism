module ETL
  def self.transform(input : Hash(String, Array(String))) : Hash(String, Int32)
    output = {} of String => Int32

    input.each do |score, letters|
      points = score.to_i
      letters.each do |letter|
        output[letter.downcase] = points
      end
    end

    output
  end
end
