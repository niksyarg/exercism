module Wordy
  def self.answer(question : String) : Number
   
    unless question.starts_with?("What is ") && question.ends_with?("?")
      raise ArgumentError.new("Invalid question format")
    end


    content = question.sub("What is ", "").sub("?", "").strip
    

    tokens = tokenize(content)
    
    if tokens.empty?
      raise ArgumentError.new("Empty expression")
    end


    first_token = tokens.shift
    unless first_token.is_a?(Int32)
      raise ArgumentError.new("Expression must start with a number")
    end
    
    result = first_token

 
    while !tokens.empty?
      op = tokens.shift
      unless op.is_a?(String)
        raise ArgumentError.new("Expected an operation")
      end

      if tokens.empty?
        raise ArgumentError.new("Missing number after operation")
      end

      num = tokens.shift
      unless num.is_a?(Int32)
        raise ArgumentError.new("Expected a number after operation")
      end

      case op
      when "plus"          then result += num
      when "minus"         then result -= num
      when "multiplied by" then result *= num
      when "divided by"    then result /= num
      else
        raise ArgumentError.new("Unsupported operation")
      end
    end

    result
  end


  private def self.tokenize(content : String) : Array(Int32 | String)
    tokens = []of Int32 | String

    regex = /-?\d+|plus|minus|multiplied by|divided by|[a-zA-Z]+/

    pos = 0
    content.scan(regex) do |match|
     
      if match.begin(0) != pos
        raise ArgumentError.new("Invalid syntax or unknown words")
      end

      token_str = match[0]
      if token_str.to_i?
        tokens << token_str.to_i
      elsif ["plus", "minus", "multiplied by", "divided by"].includes?(token_str)
        tokens << token_str
      else
      
        raise ArgumentError.new("Unsupported operation or word")
      end
      
      pos = match.end(0)

      while pos < content.bytesize && content.char_at(pos) == ' '
        pos += 1
      end
    end

  
    if pos != content.bytesize
      raise ArgumentError.new("Invalid syntax at the end of expression")
    end

    tokens
  end
end
