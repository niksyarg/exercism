module FlattenArray
  def self.flatten(input : Array) : Array
    result = [] of Int32 
    
    input.each do |element|
      if element.is_a?(Array)

        result.concat(self.flatten(element))
      elsif !element.nil?
    
        result << element
      end
    end
    
    result
  end
end
