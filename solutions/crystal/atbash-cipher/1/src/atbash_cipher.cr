module AtbashCipher
  ALPHABET = "abcdefghijklmnopqrstuvwxyz"
  REVERSED = ALPHABET.reverse

  def self.encode(message : String) : String
    translate(message)
      .chars
      .each_slice(5)
      .map(&.join)
      .join(" ")
  end

  def self.decode(message : String) : String
    translate(message)
  end

  private def self.translate(message : String) : String
    message
      .downcase
      .chars
      .compact_map do |char|
        if idx = ALPHABET.index(char)
          REVERSED[idx]
        elsif char.ascii_number?
          char
        else
          nil
        end
      end
      .join
  end
end
