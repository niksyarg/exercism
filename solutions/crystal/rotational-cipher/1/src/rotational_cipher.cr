module RotationalCipher
  def self.rotate(plaintext : String, key : Number) : String
    String.build(plaintext.bytesize) do |builder|
      plaintext.each_char do |char|
        if char.ascii_lowercase?
          shifted = 'a'.ord + (char.ord - 'a'.ord + key) % 26
          builder << shifted.chr
        elsif char.ascii_uppercase? 
          shifted = 'A'.ord + (char.ord - 'A'.ord + key) % 26
          builder << shifted.chr
        else
          builder << char
        end 
      end
    end 
  end 
end 
