module MatchingBrackets
  def self.valid?(str : String) : Bool
    stack = [] of Char
    brackets = {
      ')' => '(',
      ']' => '[',
      '}' => '{'
    }

    str.each_char do |char|
      if brackets.values.includes?(char)
        stack << char
      elsif brackets.has_key?(char)
        return false if stack.empty? || stack.pop != brackets[char]
      end
    end

    stack.empty?
  end
end
