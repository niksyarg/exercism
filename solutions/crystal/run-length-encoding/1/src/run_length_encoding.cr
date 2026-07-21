module RunLengthEncoding
  def self.encode(input : String) : String
    return "" if input.empty?

    String.build do |builder|

      input.scan(/(.)\1*/) do |match|
        sequence = match[0]
        char = sequence[0]
        count = sequence.size

       
        builder << count if count > 1
        builder << char
      end
    end
  end

  def self.decode(input : String) : String
    String.build do |builder|
  
      input.scan(/(\d*)(.)/) do |match|
        count_str = match[1]
        char = match[2]
        
        count = count_str.empty? ? 1 : count_str.to_i
        builder << char * count
      end
    end
  end
end
