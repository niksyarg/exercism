module NucleotideCount
  def self.nucleotide_counts(nucleotides : String) : Hash(Char, Int32)

    counts = {'A' => 0, 'C' => 0, 'G' => 0, 'T' => 0}

    nucleotides.each_char do |char|
      if counts.has_key?(char)
        counts[char] += 1
      else
  
        raise ArgumentError.new("Invalid nucleotide: #{char}")
      end
    end

    counts
  end
end
