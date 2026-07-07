module Bob
  def self.hey(remark : String) : String
    remark = remark.strip
    
    return "Fine. Be that way!" if remark.empty?

    is_question = remark.ends_with?('?')
  is_yelling = remark.matches?(/[a-zA-Z]/) && remark == remark.upcase


    case
    when is_yelling && is_question
      "Calm down, I know what I'm doing!"
    when is_yelling
      "Whoa, chill out!"
    when is_question
      "Sure."
    else
      "Whatever."
    end
  end
end
