module Series
  def self.slices(series : String, slice_length : Number) : Array(String)
  
    if slice_length <= 0 || slice_length > series.size
      raise ArgumentError.new("Invalid slice length")
    end

    result = [] of String
 
    last_index = series.size - slice_length

    (0..last_index).each do |i|
      result << series[i, slice_length]
    end

    result
  end
end
