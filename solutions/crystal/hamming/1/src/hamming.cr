module Hamming
  def self.distance(strand1 : String, strand2 : String) : Number
    raise ArgumentError.new("Strands must be of equal length") if strand1.bytesize != strand2.bytesize


    strand1.each_char.zip(strand2.each_char).count { |char1, char2| char1 != char2 }
  end
end
