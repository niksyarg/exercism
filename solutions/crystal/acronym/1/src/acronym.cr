module Acronym
  def self.abbreviate(phrase : String) : String
    phrase
      .gsub(/[^a-zA-Z\s-]/, "") 
      .split(/[\s-]+/)        
      .reject(&.empty?)       
      .map(&.[0].upcase)      
      .join                     
  end
end
